import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// 1) Отримуємо посилання на ul.gallery
const gallery = document.querySelector(".gallery");

// 2) Створимо елементи галереї
const markupGalleryItems = galleryItems
  .map(
    ({ preview, original, description }) => `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");

// 3) Додамо елементи галереї до розмітки
gallery.insertAdjacentHTML("beforeend", markupGalleryItems);

// 4) Зробимо ініціалізацію бібліотеки та налаштуємо
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  scrollZoom: false,
});
