// ADD TO CART FEATURE
const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.name === name);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
  });
});

// DISPLAY CART ITEMS
const cartTable = document.getElementById("cart-items");
if (cartTable) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cartTable.innerHTML = "";

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const row = `
      <tr>
        <td>${item.name}</td>
        <td>${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
        <td>${itemTotal.toFixed(2)}</td>
        <td><button class="remove-item" data-index="${index}">Remove</button></td>
      </tr>
    `;
    cartTable.innerHTML += row;
  });

  document.getElementById("total-price").textContent = total.toFixed(2);

  // Remove item
  const removeButtons = document.querySelectorAll(".remove-item");
  removeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-index");
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    });
  });

  // Checkout
  document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Checkout successful! (Simulation)");
    localStorage.removeItem("cart");
    location.reload();
  });
}

const firebaseConfig = {
  apiKey: "AIzaSyAxxxxxxxxxxxxxxxx",
  authDomain: "mystore.firebaseapp.com",
  projectId: "mystore",
  storageBucket: "mystore.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcd1234"
};
