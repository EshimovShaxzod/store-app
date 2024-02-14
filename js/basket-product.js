
let elBasketProducts = document.querySelector('.basket-products-result'),
    elBasketProductTemplate = document.querySelector('.basket-product-template').content,
    elBasketFragment = new DocumentFragment();

    // ******************************

let elBasketProductNum = document.querySelector('.basket-product-number');

elBasketProductNum.textContent = basketProduct.length


console.log(basketProduct);
// console.log(basketProduct[0]);

basketProduct.forEach((product) => {
    
    let cloneBasketProducts = elBasketProductTemplate.cloneNode(true);

    cloneBasketProducts.querySelector('.basket-product-image').src = product.image;
    cloneBasketProducts.querySelector('.product-basket-title').textContent = product.title;
    cloneBasketProducts.querySelector('.product-basket-category').textContent = product.category;
    cloneBasketProducts.querySelector('.product-basket-price').textContent =  '$ ' +  product.price;

    elBasketFragment.appendChild(cloneBasketProducts)

})

elBasketProducts.appendChild(elBasketFragment);

