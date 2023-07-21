function handleClick() {
  alert("Added to Card Succesfully!");
}

const productContainers = document.querySelectorAll(".product-container");

function handleButtonClick(event) {
  const containerWidth = event.target.parentNode.getBoundingClientRect().width;
  if (event.target.className.includes("nxt-btn")) {
    event.target.parentNode.scrollLeft += containerWidth;
  } else if (event.target.className.includes("pre-btn")) {
    event.target.parentNode.scrollLeft -= containerWidth;
  }
}

productContainers.forEach((container) => {
  const nxtBtn = container.querySelector(".nxt-btn");
  const preBtn = container.querySelector(".pre-btn");
  nxtBtn.addEventListener("click", handleButtonClick);
  preBtn.addEventListener("click", handleButtonClick);
});

document.getElementById("cart-img").addEventListener("click", toggleCart);
document.getElementById("add-to-cart").addEventListener("click", toggleCart);

function toggleCart() {
  var cart = document.getElementById("cart");
  if (cart.classList.contains("hidden")) {
    cart.classList.remove("hidden");
    cart.classList.remove("translate-x-full");
    cart.classList.add("active");
  } else {
    cart.classList.add("translate-x-full");
    setTimeout(() => {
      cart.classList.add("hidden");
      cart.classList.remove("active");
    }, 500);
  }
}

const quantityContainers = document.querySelectorAll(".quantity-container");

quantityContainers.forEach((container) => {
  const quantityElement = container.querySelector(".quantity");
  const plusBtn = container.querySelector(".plus");
  const minusBtn = container.querySelector(".minus");

  let quantity = 0;

  plusBtn.addEventListener("click", () => {
    quantity++;
    quantityElement.textContent = quantity;
  });

  minusBtn.addEventListener("click", () => {
    if (quantity > 0) {
      quantity--;
      quantityElement.textContent = quantity;
    }
  });
});

let cart = [];

function handleClick(itemId) {
  let itemElement = document.getElementById(itemId);
  let itemName = itemElement.querySelector(".product-brand").innerText;
  let itemPrice = itemElement.querySelector(".price").innerText;
  let itemImg = itemElement.querySelector(".product-thumb").src;

  let existingItem = cart.find((cartItem) => cartItem.id === itemId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    let item = {
      id: itemId,
      name: itemName,
      price: itemPrice,
      img: itemImg,
      quantity: 1,
    };
    cart.push(item);
  }

  renderCart();
  updateItemCount();
}

function renderCart() {
  let cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";

  cart.forEach((item) => {
    let itemElement = document.createElement("div");
    itemElement.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="removeFromCart('${item.id}')">Remove</button>
        `;
    cartElement.appendChild(itemElement);
  });
}

function removeFromCart(itemId) {
  cart = cart.filter((item) => item.id !== itemId);
  renderCart();
  updateItemCount();
}

function updateItemCount() {
  let totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("item-count").innerText = totalQuantity;
}

function renderCart() {
  let cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";

  cart.forEach((item) => {
    let itemElement = document.createElement("div");
    itemElement.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="cart-item-img">
            <h2>${item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="removeFromCart('${item.id}')">Remove</button>
        `;
    cartElement.appendChild(itemElement);
  });
}

function displayCartItems(cartItems) {
  var cartElement = document.getElementById("cart");
  cartElement.innerHTML = ""; // Clear the cart

  cartItems.forEach((item) => {
    var itemElement = document.createElement("li");
    itemElement.className = "cart-item"; // Add class for styling

    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="item-image"/>
      <div class="item-details">
        <h2>${item.name}</h2>
        <p>Price: $${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <button onclick="removeFromCart('${item.id}')">Remove</button>
      </div>
    `;

    cartElement.appendChild(itemElement);
  });
}
