const products = [
    {
        name: 'Sneakers',
        price: 1300,
        size: '6/7/8/9',
        imgUrl: 'shoes.jpg',
        description: 'Step into style with our versatile sneakers, designed for comfort and fashion-forward flair, perfect for every day and any adventure.'
    },
    {
        name: 'Boots',
        price: 2000,
        size: '6/7/8/9',
        imgUrl: 'boots.avif',
        description: 'Elevate your footwear collection with our rugged yet refined boots, crafted for durability and timeless style, ideal for urban exploration or outdoor adventures.'
    },
    {
        name: 'Leather Shoes',
        price: 3000,
        size: 'S/M/L/XL',
        imgUrl: 'Lshoes.avif',
        description: 'Discover sophistication with our meticulously crafted leather shoes, blending timeless elegance with premium comfort, perfect for both formal occasions and everyday refinement.'
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
