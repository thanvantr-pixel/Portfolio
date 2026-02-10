function loadGallery(jsonPath, containerId, limit = null) {
  fetch(jsonPath)
    .then(res => res.json())
    .then(images => {
      if (limit) images = images.slice(0, limit);

      const container = document.getElementById(containerId);

      images.forEach(img => {
        const image = document.createElement("img");
        image.src = img.thumb;
        image.loading = "lazy";
        image.onclick = () => openLightbox(img.full);
        container.appendChild(image);
      });
    })
    .catch(err => console.error(err));
}
