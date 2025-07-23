// Sepet sayacını günceller
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  let count = 0;
  cart.forEach(item => count += item.quantity);
  const el = document.getElementById('cart-count');
  if (el) el.textContent = count;
}

// Sepete ürün ekler
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount(); // ✅ Ürün eklenince sayaç güncellenir
  alert("Ürün sepete eklendi!");
}

// Sayfa yüklendiğinde butonlara tıklama işlevi ver
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const product = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: parseFloat(button.dataset.price),
        image: button.dataset.image
      };
      addToCart(product);
    });
  });

  updateCartCount(); // ✅ Sayfa yüklenince sayaç güncellenir
});
