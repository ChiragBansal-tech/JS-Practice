const products = [
    {
        name: 'Trousers',
        price: 1500,
        size: 'S/M/L/XL',
        imgUrl: 'Trousers.avif',
        description: 'Elevate your wardrobe with our versatile trousers, tailored for comfort and style, offering a perfect blend of sophistication and everyday ease.'
    },
    {
        name: 'Jeans',
        price: 2000,
        size: 'S/M/L/XL',
        imgUrl: 'Jeans.avif',
        description: 'Explore effortless style with our range of jeans, crafted for comfort and durability, perfect for any occasion from casual outings to laid-back weekends.'
    },
    {
        name: 'Joggers',
        price: 1250,
        size: 'S/M/L/XL',
        imgUrl: 'joggers.webp',
        description: 'Embrace comfort and style with our joggers, designed for active lifestyles and leisurely days, combining functionality with modern urban flair.'
    }
];
let cart =[]

function renderItems() {

    let contentDiv = document.querySelector('.col-content');
    contentDiv.innerHTML = ''; 
    products.forEach(product => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('item'); 
        
        itemDiv.style.borderBottom = '2px solid black';
        itemDiv.style.paddingTop = '20px';
        itemDiv.style.display ='flex';

        itemDiv.innerHTML = `
            <div><img src="${product.imgUrl}" alt="${product.name}" style="width:  200px; height: 200px;"></div>
            <div style="padding-left: 20px" >
            <h3>${product.name}</h3>
            <h4>Price: ${product.price}</h4>
            <h5>Size: ${product.size}</h5>
            <p>Description: ${product.description}</p>
            <div style="display: flex; justify-content: right; align-items: center;">
            <button class="atc">Add To Cart</button>
            </div>
            </div>
        `;

        
        contentDiv.appendChild(itemDiv);
    });


    document.querySelectorAll('.atc').forEach((button, index) => {
        button.addEventListener('click', () => {
            addToCart(products[index]);
        });
    });
}

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    console.log(existingProduct)
    if (existingProduct) {
        existingProduct.quantity++
        console.log(existingProduct.quantity)
    } else {
        const productWithQuantity = { ...product, quantity: 1 };
        cart.push(productWithQuantity);
    }
    localStorage.setItem('cart', JSON.stringify(cart)); 
    alert(`${product.name} has been added to your cart.`);
}


document.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    renderItems();
});

function addDynamicsCSS(){
    let style = document.createElement('style');
    style.type ='text/css';
    let css =
    `
        .atc{
            text-align: center;
            margin: 0 auto;
            display: block;
        }
        .atc.right{
            align-items: right;
        }    
    `
}
