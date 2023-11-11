export function counter (price) {
    const countOfPages = document.querySelector('#count-of-pages');
    const countOfBooks = document.querySelector('#count-of-books');
    const typeOfLists = document.querySelector('#type-of-list');
    const typeOfCover = document.querySelector('#type-of-cover');
    const typeOfThat = document.querySelector('#type-of-that');


    const countBooks = parseInt(countOfBooks.value);
    const countPages = parseInt(countOfPages.value);
    const optionLists = typeOfLists.value;
    const optionCover = typeOfCover.value;
    const optionThat = typeOfThat.value


    const priceBooks = parseInt(countOfBooks.dataset.price);
    const pricePages = parseInt(countOfPages.dataset.price);


    price = (countBooks * priceBooks) * (countPages * pricePages * optionLists) + (countBooks * optionCover * optionThat);

    return price;

};