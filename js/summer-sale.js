function handleClick(event){
    const selectedProduct = document.getElementById("order-entry");
    const productName = event.childNodes[3].childNodes[3].innerText;
    const orderedList = document.createElement("LI");
    const count = selectedProduct.childElementCount;
    orderedList.innerText = `${count + 1}. ${productName}`;
    selectedProduct.appendChild(orderedList);

  

    
}