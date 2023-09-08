const checkoutItems = document.getElementById('checkout-items');
const totalItems = document.getElementById('total-items');
const totalPrice = document.getElementById('total-price');

function displayCartItems() {
  const cartData = JSON.parse(localStorage.getItem('cart'));
  if (cartData) {
    let itemsCount = 0;
    let total = 0;

    cartData.forEach(item => {
      const itemTotal = item.price * item.quantity;
      itemsCount += item.quantity;
      total += itemTotal;
      checkoutItems.innerHTML += `<li>${item.productName} - ${item.quantity}x - $${itemTotal}</li>`;
    });

    totalItems.textContent = itemsCount;
    totalPrice.textContent = total.toFixed(2);
  }
}

displayCartItems();
