import { getStorageItem, setStorageItem } from './util.js';
let store = getStorageItem('store');
const setupStore = (products) => {
    store = products.map((product) => {
        const {id,fields:{name, colors, company, price,featured, image:img}} = product;
        const image = img[0].thumbnails.large.url;
        return {id, name, colors, price, company, featured, image}
    })
    setStorageItem('store',store)
    };

  

const findProduct = (id) => {
    let product = store.find((product) =>  product.id === id)
    return product 
};

export { store, setupStore, findProduct };
