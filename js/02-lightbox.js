import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
   <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
    </div>`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', markup);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
  scrollZoom: false,
});
