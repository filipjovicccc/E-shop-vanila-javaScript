function addToCart(example) {
  let parentElem = example.parentElement;

  let title = parentElem.querySelector("h4").innerText;

  let price = parentElem.querySelector("p").innerText;

  let amount = parentElem.querySelector("input").value;

  console.log(amount);

  price = price.substring(1);
  price = parseInt(price);

  let cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML += `<h3></h3>`;
}
