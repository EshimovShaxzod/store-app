// GET ELEMENTS FROM HTML
const elProductsResult = document.querySelector(".products-result");
const elProductsTemplate = document.querySelector(".products-template").content;
const newProductsFragment = new DocumentFragment();

// RENDER PRODUCTS
const renderProducts = (products) => {
  products.slice(0, 8).forEach((product) => {
    const cloneProductsTemplate = elProductsTemplate.cloneNode(true);
    
    cloneProductsTemplate
    .querySelector(".product-image").dataset.id = product.id
    cloneProductsTemplate.querySelector(".product-image").src = product.image;
    cloneProductsTemplate.querySelector(".product-image").alt = product.title;
    cloneProductsTemplate.querySelector(".product-category").textContent =
    product.category;
    cloneProductsTemplate.querySelector(".product-title").textContent =
    product.title;
    cloneProductsTemplate.querySelector(".product-price").textContent =
    "$ " + product.price;
    
    newProductsFragment.appendChild(cloneProductsTemplate);
  });
  
  elProductsResult.appendChild(newProductsFragment);
};

// GET PRODUCTS FROM API
const API_URL = "https://fakestoreapi.com/products";

const getProducts = async (url) => {
  try {
    const response = await fetch(url);
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error(error.message);
  }
};

getProducts(API_URL);

//

let elProduct = document.querySelector('.product')
// console.log(elProduct);



elProductsResult.addEventListener("click", (evt) => {
  evt.preventDefault();
  const url = "http://127.0.0.1:5500/product.html?";
  let id = evt.target.dataset.id;

  if(evt.target.matches('.product-img')){
    console.log('ha ha');
    // console.log(id);
    const params = new URLSearchParams({ id });
    window.location.href = url + params;
  }
  
});


//   ************************************
let elBasketProduct = document.querySelector('.basket-product');


elBasketProduct.addEventListener('click', () => {
    
    let url = 'http://127.0.0.1:5500/basketProduct.html?'
    
    window.location.href = url;
})



