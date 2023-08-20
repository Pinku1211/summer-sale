let total = 0;

function handleClick(event) {
    const selectedProductContainer = document.getElementById("order-entry");
    const productName = event.childNodes[3].childNodes[3].innerText;
    const listOfOrder = document.createElement("p");
    const count = selectedProductContainer.childElementCount;
    listOfOrder.innerText = `${count + 1}. ${productName}`;
    selectedProductContainer.appendChild(listOfOrder);

    const price = event.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = (parseFloat(total) + parseFloat(price)).toFixed(2);
    document.getElementById("total-price").innerHTML = `${total}TK`;

    const purchaseBtn = document.getElementById("purchase-btn");
    if (total > 0.00) {
        purchaseBtn.removeAttribute("disabled")
        getTotal(total);
    }

    const couponBtn = document.getElementById("coupon-btn");
    if (total >= 200.00) {
        couponBtn.removeAttribute("disabled")
    }
    console.log(total)
}

function getTotal(amount) {
    const totalAmount = document.getElementById("total");
    totalAmount.innerHTML = `${amount}TK`
}

document.getElementById("coupon-btn").addEventListener("click", function () {
    const couponValue = document.getElementById("coupon-value").value;
    const discount = ((20 / 100) * total).toFixed(2);
    const amountToPay = (total - discount).toFixed(2);
    if (couponValue === "SELL200") {
        document.getElementById("Discount").innerHTML = (`${discount}TK`);
        getTotal(amountToPay);
    }
})

document.getElementById("go-home-btn").addEventListener("click", function () {
    window.location.href = "index.html"
})