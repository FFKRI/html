let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Buttercream Latte',
        image: '1.WEBP',
        price: 12
    },
    {
        id: 2,
        name: 'Monday Blue Cookies Latte',
        image: '2.WEBP',
        price: 14
    },
    {
        id: 3,
        name: 'Dark Choco Mocha',
        image: '3.WEBP',
        price: 14
    },
    {
        id: 4,
        name: 'Pecan Praline Latte',
        image: '4.WEBP',
        price: 13
    },
    {
        id: 5,
        name: 'Almond Macadamia Latte',
        image: '5.WEBP',
        price: 13
    },
    {
        id: 6,
        name: 'Caramel Macchiato',
        image: '6.WEBP',
        price: 13
    },
    {
        id: 7,
        name: 'Seasalt Choco Cream Mocha',
        image: '7.WEBP',
        price: 15
    },
    {
        id: 8,
        name: 'Vanilla Latte',
        image: '8.WEBP',
        price: 13
    },
    {
        id: 9,
        name: 'Seasalt Caramel Macchiato',
        image: '9.WEBP',
        price: 15
    },
    {
        id: 10,
        name: 'Pink Friday Strawberry Cookies',
        image: '10.WEBP',
        price: 13
    },
    {
        id: 11,
        name: 'Chocolate Latte',
        image: '11.WEBP',
        price: 12
    },
    {
        id: 12,
        name: 'Green Tea Latte',
        image: '12.WEBP',
        price: 12
    },
    {
        id: 13,
        name: 'Cookies and Cream',
        image: '13.WEBP',
        price: 16
    },
    {
        id: 14,
        name: 'Caramel Creme',
        image: '14.WEBP',
        price: 16
    },
    {
        id: 15,
        name: 'Mango Lime',
        image: '15.WEBP',
        price: 16
    },
    {
        id: 16,
        name: 'Lemon Blue',
        image: '16.WEBP',
        price: 16
    },
    {
        id: 17,
        name: 'Caramel Espresso',
        image: '17.WEBP',
        price: 16
    },
    {
        id: 18,
        name: 'Chocochip',
        image: '18.WEBP',
        price: 16
    },
    {
        id: 19,
        name: 'Green Tea',
        image: '19.WEBP',
        price: 16
    },
    {
        id: 20,
        name: 'Espresso',
        image: '20.WEBP',
        price: 16
    },
    {
        id: 21,
        name: 'Mocha More',
        image: '21.WEBP',
        price: 16
    },
    {
        id: 22,
        name: 'Chicken Slice Cheese Crossaint',
        image: '22.PNG',
        price: 9
    },
    {
        id: 23,
        name: 'Apple Latice',
        image: '23.PNG',
        price: 8
    },
    {
        id: 24,
        name: 'Mushroom Chicken Deluxe',
        image: '24.PNG',
        price: 10
    },
    {
        id: 25,
        name: 'Zero Meat Lasagna',
        image: '25.PNG',
        price: 13
    },
    {
        id: 26,
        name: 'Sloppy Joe Mac & Cheese',
        image: '26.PNG',
        price: 15
    },
    {
        id: 27,
        name: 'Korean Mac & Cheese',
        image: '27.PNG',
        price: 14
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}