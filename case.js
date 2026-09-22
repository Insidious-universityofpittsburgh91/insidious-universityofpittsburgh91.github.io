const lightbox = document.getElementById('caseLightbox');
const lightboxImage = document.getElementById('caseLightboxImage');
const closeButton = document.getElementById('caseLightboxClose');

document.querySelectorAll('[data-lightbox]').forEach((button) => {
  button.addEventListener('click', () => {
    lightboxImage.src = button.dataset.lightbox;
    lightboxImage.alt = button.querySelector('img')?.alt || 'Project artwork';
    lightbox.showModal();
  });
});

closeButton?.addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox?.open) lightbox.close();
});
