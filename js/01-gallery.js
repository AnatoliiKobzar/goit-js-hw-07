import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"/>
    </a>
    </div>`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', markup);
galleryEl.addEventListener('click', onImgGalleryClick);

let instance = '';

function onImgGalleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  instance = basicLightbox.create(`<img src="${event.target.parentNode.href}">`, {
    onShow: instance => {
      window.addEventListener('keydown', onEscKeyPress);
    },

    onClose: instance => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  });
  instance.show();
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}
