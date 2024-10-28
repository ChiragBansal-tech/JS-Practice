const products= [
    {
        id: '1',
        name: 'White Shirt',
        price: 900,
        sizes : ['S', 'M', 'L', 'XL', 'XXL'],
        imgUrl: 'shirt-1.jpg',
        quantity: '1',
        description: 'Crisp and timeless, our white shirt blends classic elegance with everyday comfort, perfect for any occasion.'
    },
    {
        id: '2',
        name: 'Blue Shirt',
        price: 800,
        sizes : ['S', 'M', 'L', 'XL', 'XXL'],
        imgUrl: 'Bshirt.avif',
        quantity:'1',
        description: 'Effortlessly stylish, our blue shirt combines versatility and sophistication, making it a wardrobe essential for any modern individual.'
    },
    {
        id: '3',
        name: 'Black Shirt',
        price: 1000,
        sizes : ['S', 'M', 'L', 'XL', 'XXL'],
        imgUrl: 'Blackshirt.avif',
        quantity:'1',
        description: 'Sleek and sophisticated, our black shirt exudes understated elegance, ideal for both formal occasions and casual outings alike.'
    },
    {
        id: '4',
        name: 'Sneakers',
        price: 1300,
        sizes : ['6', '7', '8', '9', '10'],
        imgUrl: 'shoes.jpg',
        quantity:'1',
        description: 'Step into style with our versatile sneakers, designed for comfort and fashion-forward flair, perfect for every day and any adventure.'
    },
    {
        id: '5',
        name: 'Boots',
        price: 2000,
        sizes : ['6', '7', '8', '9', '10'],
        imgUrl: 'boots.avif',
        quantity:'1',
        description: 'Elevate your footwear collection with our rugged yet refined boots, crafted for durability and timeless style, ideal for urban exploration or outdoor adventures.'
    },
    {
        id: '6',
        name: 'Leather Shoes',
        price: 3000,
        sizes : ['6', '7', '8', '9', '10'],
        imgUrl: 'Lshoes.avif',
        quantity:'1',
        description: 'Discover sophistication with our meticulously crafted leather shoes, blending timeless elegance with premium comfort, perfect for both formal occasions and everyday refinement.'
    },
    {
        id: '7',
        name: 'Trousers',
        price: 1500,
        sizes : ['S', 'M', 'L', 'XL', 'XXL'],
        imgUrl: 'Trousers.avif',
        quantity:'1',   
        description: 'Elevate your wardrobe with our versatile trousers, tailored for comfort and style, offering a perfect blend of sophistication and everyday ease.'
    },
    {
        id: '8',
        name: 'Jeans',
        price: 2000,
        sizes : ['S', 'M', 'L', 'XL', 'XXL'],
        imgUrl: 'Jeans.avif',
        quantity:'1',
        description: 'Explore effortless style with our range of jeans, crafted for comfort and durability, perfect for any occasion from casual outings to laid-back weekends.'
    },
    {
        id: '9',
        name: 'Joggers',
        price: 1250,
        sizes : ['S', 'M', 'L', 'XL', 'XXL'],
        imgUrl: 'joggers.webp',
        quantity:'1',
        description: 'Embrace comfort and style with our joggers, designed for active lifestyles and leisurely days, combining functionality with modern urban flair.'
    }
];
let cart = [];

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
            <p>Sizes Available: ${product.sizes.join(', ')}</p>
            <p>Description: ${product.description}</p>
            <div style="display: flex; justify-content: right; align-items: center; padding-bottom:20px">
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
function addToCart(product, selectedSize) {
    const existingProduct = cart.find(item => item.id === product.id && item.selectedSize === selectedSize);
    
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        const productWithQuantityAndSize = { ...product, quantity: 1, selectedSize };
        cart.push(productWithQuantityAndSize);
    }
    localStorage.setItem('cart', JSON.stringify(cart)); 
    alert(`${product.name} (Size: ${selectedSize}) has been added to your cart.`);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    renderItems();
});
