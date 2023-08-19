let total = 0;
function handleClick(event){
    const selectedProduct = document.getElementById("order-entry");
    const productName = event.childNodes[3].childNodes[3].innerText;
    const orderedList = document.createElement("LI");
    const count = selectedProduct.childElementCount;
    orderedList.innerText = `${count + 1}. ${productName}`;
    selectedProduct.appendChild(orderedList);

    const price = event.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = (parseFloat(total) + parseFloat(price)).toFixed(2);
    document.getElementById("total-price").innerHTML = (`${total}TK`);
    const discount = ((20/100) * total).toFixed(2);

    const purchaseBtn =document.getElementById("purchase-btn");
    if(total > 0.00){
        purchaseBtn.removeAttribute("disabled")
    }
    const couponBtn = document.getElementById("coupon-btn");
    
    if ( total >= 200.00){
        document.getElementById("Discount").innerHTML = (`${discount}TK`);
        couponBtn.removeAttribute("disabled")
    }

    const amountToPay = (total - discount).toFixed(2);
    const totalAmount = document.getElementById("total")
    totalAmount.innerHTML = `${amountToPay}TK`
    
}