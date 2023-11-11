export function createTotalPrice (finalPrice) {
    const totalPriceEl = document.getElementById('total-price');
    const priceValue = totalPriceEl;

    priceValue.classList.add("very-final-price");

    priceValue.innerHTML = `Стоимость: ${finalPrice} рублей`;
    totalPriceEl.append(priceValue);
    
    return totalPriceEl;
};



export function createSign () {
    const totalPriceEl = document.getElementById('total-price');
    const priceValue = totalPriceEl;

    priceValue.classList.add("very-final-price");

    priceValue.innerHTML = "Заполните все необходимые поля!";
    totalPriceEl.append(priceValue);
    
    return totalPriceEl;
};

