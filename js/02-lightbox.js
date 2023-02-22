import { galleryItems } from "./gallery-items.js";
// Change code below this line

let gallery = document.querySelector(".gallery");

function galleryElemets(elements) {
  return elements
    .map(
      (element) => `<a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`
    )
    .join("");
}

gallery.insertAdjacentHTML("afterbegin", galleryElemets(galleryItems));

gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  scrollZoomFactor: 0.5,
});

// Lazyloading

const galleryImages = document.querySelectorAll(".gallery__image");

if ("loading" in HTMLImageElement.prototype) {
  galleryImages.forEach((image) => image.setAttribute("loading", "lazy"));
} else {
  galleryImages.forEach((image) => {
    image.classList.add("lazyload");
    image.setAttribute("data-sizes", "auto");
    image.setAttribute("data-srcset");
  });
}
