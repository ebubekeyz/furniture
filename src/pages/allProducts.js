// global imports
import '../toggleSidebar.js';
import '../cart/toggleCarts.js';
import '../cart/setupCarts.js';

//  filter imports
import setupSearch from '../filters/search2.js';
import setupCompanies from '../filters/companies2.js';
import setupPrice from '../filters/price2.js';

// specific imports
import { setupStore, store } from '../store.js';
import display from '../displayProducts.js';
import { getElement } from '../util.js';
import { addToCart } from '../cart/setupCarts.js';
import fetchProducts from '../fetchProducts.js'



const init = async() => {
    console.log('hello')
const loading = getElement('.page-loading')


if(store.length < 1){
    const products = await fetchProducts();
    setupStore(products)
}

display(store, getElement('.products-container'))
setupSearch(store)
setupCompanies(store)
setupPrice(store)


loading.style.display = 'none'
    
}

init()