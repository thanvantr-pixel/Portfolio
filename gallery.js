let allImages = [];
let currentIndex = 0;
const IMAGES_PER_LOAD = 24;

function initGallery(jsonPath, containerId) {
  fetch(jsonPath)
    .then(res => res.json())
    .then(data => {
      allImages = data;
      currentIndex = 0;
      renderBatch(containerId);
      createLoadMoreButton(containerId);
    })
    .catch(err => console.error(err));
}

function renderBatch(containerId) {
  const container = document.getElementById(containerId);
  const nextImages = allImages.slice(
    currentIndex,
    currentIndex + IMAGES_PER_LOAD
  );

  nextImages.forEach(img => {
    const image = document.createElement("img");
    image.src = img.thumb;
    image.loading = "lazy";
    image.onclick = () => openLightbox(img.full);
    container.appendChild(image);
  });

  currentIndex += IMAGES_PER_LOAD;

  if (currentIndex >= allImages.length) {
    const btn = document.getElementById("load-more");
    if (btn) btn.remove();
  }
}

function createLoadMoreButton(containerId) {
  if (allImages.length <= IMAGES_PER_LOAD) return;

  const btn = document.createElement("button");
  btn.id = "load-more";
  btn.textContent = "Load More";
  btn.className = "load-more";

  btn.onclick = () => renderBatch(containerId);

  document.body.appendChild(btn);
}
