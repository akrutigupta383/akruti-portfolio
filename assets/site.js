document.documentElement.classList.add('js');

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
if (menuToggle && nav) {
  menuToggle.hidden = false;
  const closeMenu = (restoreFocus = false) => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) menuToggle.focus();
  };
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('is-open')) closeMenu(true); });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
  const mobile = matchMedia('(max-width: 600px)');
  mobile.addEventListener('change', () => closeMenu());
}

const filters = document.querySelector('.filters');
if (filters) {
  const cards = [...document.querySelectorAll('.project-card')];
  const count = document.querySelector('.work-count');
  const grid = document.querySelector('.project-grid');
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    filters.querySelectorAll('button').forEach(item => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    const selected = button.dataset.filter;
    cards.forEach(card => { card.hidden = selected !== 'all' && card.dataset.category !== selected; });
    grid.classList.toggle('is-filtered', selected !== 'all');
    const visible = cards.filter(card => !card.hidden).length;
    count.textContent = `${visible} selected project${visible === 1 ? '' : 's'}`;
  });
}

const copy = document.querySelector('.copy-email');
if (copy && navigator.clipboard?.writeText) {
  copy.hidden = false;
  copy.addEventListener('click', async () => {
    const status = document.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(copy.dataset.email);
      status.textContent = 'Email address copied.';
    } catch {
      status.textContent = 'Select the email address to copy it.';
    }
  });
}

const artwork = document.querySelector('[data-tilt]');
const motion = matchMedia('(prefers-reduced-motion: reduce)');
const pointer = matchMedia('(pointer: fine)');
if (artwork) {
  const visual = artwork.parentElement;
  const reset = () => { artwork.style.transform = ''; };
  visual.addEventListener('pointermove', event => {
    if (motion.matches || !pointer.matches) return;
    const box = visual.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    artwork.style.transform = `rotate(-5deg) rotateY(${x * 8}deg) rotateX(${-y * 6}deg)`;
  });
  visual.addEventListener('pointerleave', reset);
  motion.addEventListener('change', reset);
}
