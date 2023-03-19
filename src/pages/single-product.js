// global imports
import '../toggleSidebar.js';
import '../cart/toggleCarts.js';
import '../cart/setupCarts.js';

// specific
import { addToCart } from '../cart/setupCarts.js';
import { singleProductUrl, getElement, formatPrice } from '../util.js';
import addToCartDOM from '../cart/addToCartDOM.js';


// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
let productID;

// show product when page loads
window.addEventListener('DOMContentLoaded', async function(){
    const urlID = window.location.search
    
    try{
        const response = await fetch(`${singleProductUrl}${urlID}`)
        if(response.status >= 200 && response.status <=299){
            const product = await response.json()

            const {id, fields} = product;
            productID = id;

            const {name, price, company, colors, description} = fields
            const image = fields.image[0].thumbnails.large.url

            document.title = `${name.toUpperCase()} | comfy`
            pageTitleDOM.textContent = `Home / ${name}`
            imgDOM.src = image
            titleDOM.textContent = `by ${company}` 
            priceDOM.textContent = formatPrice(price)
            descDOM.innerHTML = description
            
            colors.forEach((color) => {
            const span = document.createElement('span')
            span.classList.add('product-color')
            span.style.backgroundColor = `${color}`
            colorsDOM.appendChild(span)
        })

        } else{
           console.log(response.status, response.statusText) 
           centerDOM.innerHTML = `
           <div>
           <h3 class="error">Sorry, Something went wrong</h3>
           <a href="index.html" class="btn">Back Home</a>
           </div>`
        }

    }
    catch(err){
        console.log(err)
    }
   

    loading.style.display = 'none'
})


cartBtn.addEventListener('click', function(){
    addToCart(productID)
})