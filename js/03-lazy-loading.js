import { galleryItems } from "./gallery-items.js";
// Change code below this line

let gallery = document.querySelector(".gallery");

function galleryElemets(elements) {
  return elements
    .map(
      (element) => `<a class="gallery__item" href="${element.original}">
  <img class="gallery__image lazyload" data-src ="${element.preview}" alt="${element.description}" loading ="lazy"/>
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

if ("loading" in HTMLImageElement.prototype) {
  const galleryImages = document.querySelectorAll(".gallery__image");
  galleryImages.forEach((image) => {
    image.src = image.dataset.src;
  });
} else {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  script.crossorigin = "anonymous";
  script.referrerpolicy = "no-referrer";

  document.body.appendChild("script");
}
