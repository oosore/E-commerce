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

// const quantityContainers = document.querySelectorAll(".quantity-container");

// quantityContainers.forEach((container) => {
//   const quantityElement = container.querySelector(".quantity");
//   const plusBtn = container.querySelector(".plus");
//   const minusBtn = container.querySelector(".minus");

//   let quantity = 0;

//   plusBtn.addEventListener("click", () => {
//     quantity++;
//     quantityElement.textContent = quantity;
//   });

//   minusBtn.addEventListener("click", () => {
//     if (quantity > 0) {
//       quantity--;
//       quantityElement.textContent = quantity;
//     }
//   });
// });

document.getElementById("cart-img").addEventListener("click", toggleCart);
document.getElementById("add-to-cart").addEventListener("click", toggleCart);

function toggleCart() {
  var cart = document.getElementById("cart");
  if (cart.classList.contains("hidden")) {
    cart.classList.remove("hidden");
    cart.classList.remove("translate-x-full");
  } else {
    cart.classList.add("translate-x-full");
    setTimeout(() => {
      cart.classList.add("hidden");
    }, 500);
  }
}

var x=0;
document.getElementById("ct").innerText=x;

function add(val) {
document.getElementById("item").innerHTML; += val;
 x=x+1;

document.getElementById("ct").innerText=x;

}