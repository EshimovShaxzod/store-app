let url = new URLSearchParams(document.location.search);
const params = url.get("id");

// console.log(params);

// ****************************
let elBrandImage = document.querySelector('.brand-image'),
elBrandTitle = document.querySelector('.brand-name'),
elBrandRating = document.querySelector('.brand-rate'),
elBrandPrice = document.querySelector('.brand-price'),
elBrandDescription = document.querySelector('.brand-description');

fetch(`https://fakestoreapi.com/products/${params}`)
.then((res) => res.json())
.then((data) => {
    // console.log(data);
    renderProduct(data)
    saveProduct(data)
    
});

// RENDER PRODUCT

function renderProduct(data){
    elBrandImage.src = data.image;
    elBrandTitle.textContent = data.title;
    elBrandRating.textContent = data.rating.rate;
    elBrandDescription.textContent = data.description;
    elBrandPrice.textContent = '$ ' + data.price
}


function setProduct(){
    localStorage.setItem('product', JSON.stringify(basketProduct));
}

let basketProduct = JSON.parse(localStorage.getItem('product'))
? JSON.parse(localStorage.getItem('product')) : [];


function saveProduct(data){
    
    let elAddBtn = document.querySelector('.add-btn');
    let elBraketProductCout = document.querySelector('.braket-product-cout')
    
    elAddBtn.addEventListener('click', () => {

        console.log(basketProduct[0]); 
        basketProduct.push(data)
        setProduct()
        
        console.log(basketProduct);    
        elBraketProductCout.textContent = `(${basketProduct.length})`
    });
}




let elBasketProduct = document.querySelector('.basket-product');


elBasketProduct.addEventListener('click', () => {
    
    let url = 'http://127.0.0.1:5500/basketProduct.html?'
    
    window.location.href = url;
})




// MODAL PRODUCT

let elJumpProductBtn = document.querySelector('.jump-basket-btn');
console.log(elJumpProductBtn);

elJumpProductBtn.addEventListener('click', () => {
    
    let url = 'http://127.0.0.1:5500/basketProduct.html?'
    
    window.location.href = url;
})




