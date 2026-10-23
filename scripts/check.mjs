import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { projects } from '../src/content.mjs';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const files = [];
async function walk(directory) {
  for (const entry of await readdir(directory,{withFileTypes:true})) {
    const filename = path.join(directory,entry.name);
    if (entry.isDirectory()) await walk(filename);
    else files.push(filename);
  }
}
await walk(root);
const pages = files.filter(file=>file.endsWith('.html'));
assert.equal(pages.length,projects.length+1,'Unexpected or stale HTML pages');
const pageIDs = new Map();
const documents = new Map();
for (const page of pages) {
  const html = await readFile(page,'utf8');
  documents.set(page,html);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);
  assert.equal(ids.length,new Set(ids).size,`Duplicate IDs in ${page}`);
  pageIDs.set(page,new Set(ids));
  assert.equal((html.match(/<h1\b/g)||[]).length,1,`Exactly one h1 required in ${page}`);
  assert(!/\b(?:TODO|TBD|PLACEHOLDER)\b/.test(html),`Unfilled content in ${page}`);
  assert(!/<(?:video|iframe)\b|\bautoplay\b/i.test(html),`Embedded playback is not authorised in ${page}`);
  assert(!/<form\b/i.test(html),`No backend contact form supported in ${page}`);
  for (const match of html.matchAll(/<img\b[^>]*>/g)) assert(/\balt="/.test(match[0]),`Missing image alt in ${page}`);
}
let links = 0;
for (const [page, html] of documents) {
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const href = match[1].replace(/&amp;/g,'&');
    if (/^(?:https?:|mailto:|data:)/.test(href)) continue;
    assert(!href.startsWith('/'),`Root-relative path would break project Pages: ${href}`);
    const url = new URL(href,`file://${page}`);
    const target = fileURLToPath(url);
    assert(target.startsWith(root),`Link escapes public directory: ${href}`);
    const info = await stat(target).catch(()=>null);
    assert(info?.isFile(),`Missing local target ${href} in ${page}`);
    if (url.hash) assert(pageIDs.get(target)?.has(decodeURIComponent(url.hash.slice(1))),`Missing anchor ${href} in ${page}`);
    links++;
  }
}
const css = await readFile(path.join(root,'assets/styles.css'),'utf8');
for (const [,resource] of css.matchAll(/url\(['"]?([^'"\)]+)['"]?\)/g)) {
  assert((await stat(path.resolve(root,'assets',resource))).isFile(),`Missing CSS asset: ${resource}`);
}
assert(css.includes('prefers-reduced-motion:reduce'),'Reduced-motion styles missing');
const bytes = (await Promise.all(files.map(async file=>(await stat(file)).size))).reduce((a,b)=>a+b,0);
console.log(`PASS: ${pages.length} pages, ${links} local links/assets, no broken anchors, no embedded playback, ${Math.round(bytes/1024)} KB total output.`);
