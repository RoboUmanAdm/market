let productGrid = document.getElementById('product-grid');
let productsArray = [];
const url = 'https://market-5404.restdb.io/rest/products';

const my_headers = {
    "Content-Type": "application/json",
    "x-apikey": 0331f31f54ffeca88277dd9d12b54a2df5d75,
    "cache-control": "no-cache",
};

fetch(url, {
    method: "GET",
    headers: my_headers
})
.then(async function (responce){
    const result = await responce.json()
    console.log(result)

// fetch(url + '/products')
//     .then(async function (response) {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`); // логування
//         }
//         let products = await response.json();
//         productGrid.innerHTML = null; // Очищення контейнера
//         products.forEach(p => {
//             productsArray.push(p) ;
//             let pElem = document.createElement('div');
//             pElem.classList.add('product');
//             pElem.innerHTML = `
//                 <h2 class='product-name'>${p.name}</h2>
//                 <img class='product-photo' src='${p.photo_url}' alt='${p.name}'>
//                 <p class='product-price'>Ціна: ${p.price} грн</p>
//                 <p class='product-description'>${p.description}</p>
//                 <a href='#'>Профіль продавця</a>
//                 <button onclick="addProductTocard(${p.id})">Купити</button>
//             `;
//             productGrid.appendChild(pElem); // Додаємо продукт у DOM
//         });
//     });

// let cardProd = document.getElementById('card-product');
// let card = [];
// if (localStorage.getItem('card')){
//     card = JSON.parse(localStorage.getItem('card'));
//     drawCardProducts();
// }

// function fun() {
//     cardProd.classList.toggle('hide')
// }

// function addProductTocard(id){
//     let product = productsArray.find(function (p){
//         return p.id == id;
//     })
//     card.push(product);
//     drawCardProducts();
//     localStorage.setItem("card", JSON.stringify(card))
//     document.getElementById('card-button').classList.add('active');
//     setTimeout(function(){
//         document.getElementById('card-button').classList.remove('active')
//     },500);
// }
// function drawCardProducts(){
//     if(card.length === 0) return cardProd.innerHTML = `Empty`;
//     cardProd.innerHTML = null;
//     let sum = 0;
//     card.forEach(function(p){
//         cardProd.innerHTML +=`
//         <p><img src = "${p.photo_url}"> ${p.price} | ${p.price} грн. </p>
//         <hr>
//         `;  
//         sum +=p.price;
//     });
//     cardProd.innerHTML+=`
//         <p>Total price: ${sum} грн. </p>
//         <button onclick="buyAll()">Buy</button>
//     `;
// }
// function buyAll(){
//     card = []
//     cardProd.innerHTML = `Грошики запалтити`;
//     localStorage.setItem("card", '[]');
// }
