// var productData = receivedObject;

var urlParams = new URLSearchParams(window.location.search);
    var encodedObject = urlParams.get("P");
    var serializedObject = decodeURIComponent(encodedObject);
    var receivedObject = JSON.parse(serializedObject);

    console.log(receivedObject);


// var product_Title = productData["name"];
// var product_brand = productData["brand"];
// var product_Desc = productData["description"];
// var product_Price = productData["price"];

document.getElementById("name").innerHTML = receivedObject.name;
document.getElementById("brand").innerHTML = receivedObject.brand;
document.getElementById("description").innerHTML = receivedObject.description;
document.getElementById("price").innerHTML = receivedObject.price;



    var pr0 = document.getElementById("pr0");
    pr0.src =receivedObject.photos[0];
    var pr1 = document.getElementById("pr1");
    pr1.src =receivedObject.photos[1];
    var pr2 = document.getElementById("pr2");
    pr2.src =receivedObject.photos[2];
    var pr3 = document.getElementById("pr3");
    pr3.src =receivedObject.photos[3];
    var pr4 = document.getElementById("pr4");
    pr4.src =receivedObject.photos[4];
    var pr5 = document.getElementById("pr5");
    pr5.src =receivedObject.photos[5];


var mainProduct_img_left = document.getElementById("productImg");




 /*   Try to change the Image on click event.
    https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg
*/
mainProduct_img_left.src =  document.getElementById("pr0").src;
document.getElementById("pr0").className="active";

document.getElementById("pr0").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("pr0").src;
    document.getElementById("pr0").className="active";
    document.getElementById("pr1").classList.remove("active");
    document.getElementById("pr2").classList.remove("active");
    document.getElementById("pr3").classList.remove("active");
    document.getElementById("pr5").classList.remove("active");
  });
  document.getElementById("pr1").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("pr1").src;
    document.getElementById("pr1").className="active";
    document.getElementById("pr0").classList.remove("active");
    document.getElementById("pr2").classList.remove("active");
    document.getElementById("pr3").classList.remove("active");
    document.getElementById("pr5").classList.remove("active");
  });
  document.getElementById("pr2").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("pr2").src;
    document.getElementById("pr2").className="active";
    document.getElementById("pr0").classList.remove("active");
    document.getElementById("pr1").classList.remove("active");
    document.getElementById("pr4").classList.remove("active");
    document.getElementById("pr3").classList.remove("active");
    document.getElementById("pr5").classList.remove("active");
  });
  document.getElementById("pr3").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("pr3").src;
    document.getElementById("pr3").className="active";
    document.getElementById("pr0").classList.remove("active");
    document.getElementById("pr1").classList.remove("active");
    document.getElementById("pr2").classList.remove("active");
    document.getElementById("pr4").classList.remove("active");
    document.getElementById("pr5").classList.remove("active");
  });

  document.getElementById("pr4").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("pr4").src;
    document.getElementById("pr4").className="active";
    document.getElementById("pr0").classList.remove("active");
    document.getElementById("pr1").classList.remove("active");
    document.getElementById("pr2").classList.remove("active");
    document.getElementById("pr3").classList.remove("active");
    document.getElementById("pr5").classList.remove("active");
  });


  document.getElementById("pr5").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("pr5").src;
    document.getElementById("pr5").className="active";
    document.getElementById("pr0").classList.remove("active");
    document.getElementById("pr1").classList.remove("active");
    document.getElementById("pr2").classList.remove("active");
    document.getElementById("pr3").classList.remove("active");
    document.getElementById("pr4").classList.remove("active");

    console.log("")
  });

//   add to cark funtionalities


var cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price, img) {
  const existingItem = cart.find(item => item.productName === productName);
  console.log(existingItem);
  if (existingItem) {
    existingItem.quantity++;

  } else {
    cart.push({ productName, price, img, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  updateCart(cart);
  for (var i = 0; i < cart.length; i++) {
    console.log(cart[i]);
}
}


//  console.log(cart);

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalItems = document.getElementById('total-items');
  const totalPrice = document.getElementById('total-price');

  cartItems.innerHTML = '';
  let itemsCount = 0;
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    itemsCount += item.quantity;
    total += itemTotal;
    cartItems.innerHTML += `<li>${item.productName} - ${item.quantity}x - $${itemTotal}</li>`;
  });

  totalItems.textContent = itemsCount;
  totalPrice.textContent = total.toFixed(2);
}

function checkout() {
  alert('Thank you for your purchase!');
  cart = [];
  updateCart();
}
