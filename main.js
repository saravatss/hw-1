import { createTotalPrice } from './button.js';
import { createSign } from './button.js';
import { counter } from './counter.js';

const button = document.getElementById('button');

let totalPrice = 0;


button.addEventListener('click', function () { 
    const checkbox = document.querySelector('#aut-popularity');

    counter(totalPrice);
  

    if (checkbox.checked) {
        totalPrice = totalPrice * 1.5;
    };
 
    const select = document.querySelector('select'); // выбираем элемент select
    const selectedValue = select.value;  

    if ((selectedValue) > 0) {
            createTotalPrice(totalPrice);
    } else {
            createSign();

    };
  
});

