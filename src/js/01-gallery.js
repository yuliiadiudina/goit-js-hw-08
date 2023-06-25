//Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm .
//Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай рефакторинг з урахуванням того, що бібліотека була встановлена через npm (синтаксис import/export).



// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


const gallaryContainer = document.querySelector('.gallery');
const createGallaryImages = createGalleryImagesMarcup(galleryItems);

gallaryContainer.insertAdjacentHTML('afterbegin', createGallaryImages);
gallaryContainer.addEventListener('click', onClickImages);

function createGalleryImagesMarcup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => 
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}" onclick = "event.preventDefault()">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join('');
}

function onClickImages(e) {
  e.preventDefault(); 
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);