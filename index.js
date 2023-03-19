// global imports
import './src/toggleSidebar.js';
import './src/cart/toggleCarts.js';
import './src/cart/setupCarts.js';
// specific imports
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/util.js';


const init = async () => {
    const products = await fetchProducts();
    setupStore(products)

    const featured = store.filter((product) => product.featured === true)

    display(featured, getElement('.featured-center'))
   
}


window.addEventListener('DOMContentLoaded', init)