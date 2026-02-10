const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.remove("hidden");
}

if (lightbox) {
  lightbox.onclick = () => {
    lightbox.classList.add("hidden");
  };
}
