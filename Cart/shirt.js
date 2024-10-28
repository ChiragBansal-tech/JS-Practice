const products = [
    {
        name: 'White Shirt',
        price: 900,
        size: 'S/M/L/XL',
        imgUrl: 'shirt-1.jpg',
        description: 'Crisp and timeless, our white shirt blends classic elegance with everyday comfort, perfect for any occasion.'
    },
    {
        name: 'Blue Shirt',
        price: 800,
        size: 'S/M/L/XL',
        imgUrl: 'Bshirt.avif',
        description: 'Effortlessly stylish, our blue shirt combines versatility and sophistication, making it a wardrobe essential for any modern individual.'
    },
    {
        name: 'Black Shirt',
        price: 1000,
        size: 'S/M/L/XL',
        imgUrl: 'Blackshirt.avif',
        description: 'Sleek and sophisticated, our black shirt exudes understated elegance, ideal for both formal occasions and casual outings alike.'
    }
];
let cart=[]
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
