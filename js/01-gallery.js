import { galleryItems } from "./gallery-items.js";
// Change code below this line

// LINKS

const gallery = document.querySelector(".gallery");

const createItems = galleryItems
  .map((galleryItem) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image "
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", createItems);

// Adding ecent listener on gallery

gallery.addEventListener("click", onGalleryItemOpenClick);

function onGalleryItemOpenClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
 
	<img src ="${event.target.dataset.source}">
`);
  instance.show();

  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}


