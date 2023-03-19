import { formatPrice, getElement } from '../util.js';


const addToCartDOM = ({id, name, amount, price, image}) => {
    const cartItemsDOM = getElement('.cart-items')
    const article = document.createElement('article')
    article.classList.add('cart-item')
    article.setAttribute('data-id', id)
    article.innerHTML = `
    <img src="${image}" class="cart-item-img" alt="${name}">
        <div>
          <h4 class="cart-item-name">${name}</h4>
          <p class="cart-item-price">${formatPrice(price)}</p>
          <buton class="cart-item-remove-btn" data-id="${id}">remove</buton>
        </div>
        <div>
          <button class="cart-item-increase-btn" data-id="${id}">
            <i class="fas fa-chevron-up"></i>
          </button>
          <p class="cart-item-amount" data-id="${id}">${amount}</p>
          <button class="cart-item-decrease-btn" data-id="${id}">
            <i class="fas fa-chevron-down"></i>
          </button>
        </div>
    `
    cartItemsDOM.appendChild(article)
};

export default addToCartDOM;
