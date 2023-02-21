import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// 1) Отримуємо посилання на div.gallery
const gallery = document.querySelector(".gallery");

// 2) Створимо елементи галереї
const markupGalleryItems = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

// 3) Додамо елементи галереї до розмітки
gallery.insertAdjacentHTML("beforeend", markupGalleryItems);

// 4) Отримаємо посилання на оригінальне фото при натисканні на елемент галереї
gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const originalImgLink = e.target.dataset.source;

  // 5) Створюємо модальне вікно
  const instance = basicLightbox.create(`
    <img src="${originalImgLink}" width="800" height="600">
`);

  instance.show();

  // 6) Закриваемо модальне вікно при натисканні клавіши Escape та знімаємо слухача
  const keyPres = (e) => {
    if (e.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", keyPres);
    }
  };

  document.addEventListener("keydown", keyPres);
});
