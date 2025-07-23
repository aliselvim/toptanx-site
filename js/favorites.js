
// Favorilere ekle
function addToFavorites(product) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.find(item => item.id === product.id)) {
    favorites.push(product);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert("Favorilere eklendi!");
  }
}

// Butonları bağla
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".add-to-favorites").forEach(button => {
    button.addEventListener("click", () => {
      const product = {
        id: button.dataset.id,
        name: button.dataset.name,
        image: button.dataset.image
      };
      addToFavorites(product);
    });
  });
});
