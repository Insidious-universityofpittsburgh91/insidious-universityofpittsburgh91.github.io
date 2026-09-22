const menuButton = document.getElementById('menuButton');
const mobileNav = document.getElementById('mobileNav');

menuButton.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const dialog = document.getElementById('projectDialog');
const dialogImage = document.getElementById('dialogImage');
const dialogTitle = document.getElementById('dialogTitle');
const dialogMeta = document.getElementById('dialogMeta');

document.querySelectorAll('.project-card').forEach(card => {
  card.querySelector('.project-open').addEventListener('click', () => {
    const img = card.querySelector('img');
    dialogImage.src = img.src;
    dialogImage.alt = img.alt;
    dialogTitle.textContent = card.dataset.title;
    dialogMeta.textContent = card.dataset.meta;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  });
});

document.getElementById('dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => {
  if (e.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.style.overflow = '';
});

const sectionLinks = [...document.querySelectorAll('.desktop-nav a')];
const sections = sectionLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = '#' + entry.target.id;
    sectionLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
  });
}, {rootMargin:'-30% 0px -60% 0px', threshold:0});

sections.forEach(section => observer.observe(section));
