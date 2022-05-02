let Total = 0;

function addToCart(example) {
  let parentElem = example.parentElement;
  let title = parentElem.querySelector("h4").innerText;

  let price = parentElem.querySelector("p").innerText;

  let amount = parentElem.querySelector("input").value;

  price = price.substring(1);
  price = parseInt(price);

  let sum = amount * price;
  Total += sum;

  let cartItems = document.querySelector(".cart-items");

  if (parseInt(amount) === 0) {
    alert("please chose amount");
  } else {
    cartItems.innerHTML += `<div class="single-item"><h3>${title} x${amount} $<span>${sum}</span>
      <button onclick="removeItem(this)"
       type="button" class="btn btn-primary">
       Remove</button></h3></div>
 `;

    example.disabled = true;
    let btn = document.querySelector(".btn-dark");

    btn.style.backgroundColor = "grey";
  }
  total = document.querySelector(".total");

  total.innerHTML = `<p>Total: $${Total}</p>`;
}

function removeItem(example) {
  let newParentElem = example.parentElement.parentElement;

  newParentElem.style.display = "none";

  let singleItem = document.querySelector(".single-item");

  let sum = singleItem.querySelector("span");

  Total -= sum.innerText;

  total = document.querySelector(".total");

  total.innerHTML = `<p>Total: $${Total}</p>`;
}
