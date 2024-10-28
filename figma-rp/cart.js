document.addEventListener('DOMContentLoaded', () => {
    const cartContentDiv = document.querySelector('.cart-content');
    const cartTotal = document.getElementById('cart-total');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const style = document.createElement('style');
    style.type = 'text/css';

    style.innerHTML = `
        .decrease, .increase {
            border: 1px solid #ccc;
            background :transparent;
            border-radius: 5px;
            height: 40px;
            width: 40px;
            cursor: pointer;
            font-size: 13px;
            font-weight: 500;
        }
        .decrease:hover, .increase:hover {
            border: 2px solid black;    
            color: white;
            background : black;
        }
        .decrease:active, .increase:active {
            background-color: #d0d0d0;
        }
        .remove{
            position: relative;
            top: -145px;
            margin-left: 720px;
            height: 50px;
            width: 120px;
            color: white;
            background: rgb(10,35,35);
            border-radius: 20px;
        }
        .subTotal{
            position: relative;
            top: -10px;
            margin-left: 745px;
        }
    `;

    document.getElementsByTagName('head')[0].appendChild(style);
    
    function renderCartItems() {
        cartContentDiv.innerHTML = '';
        let total = 0;
        if (cart.length === 0) {
            cartContentDiv.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.style.display = 'flex';
            itemDiv.style.borderBottom = '2px solid black';
            itemDiv.style.paddingTop = '20px'

            itemDiv.innerHTML = `
                <div><img src="${item.imgUrl}" alt="${item.name}" style="width: 200px; height: 200px;"></div>
                <div style="padding-left: 20px;">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <div class="quantity" style="display: flex; ">
                        <button class="decrease" data-id="${item.id}">Sub</button>
                        <button class="increase" data-id="${item.id}">Add</button>
                    </div>
                    <button class="remove" data-id="${item.id}">Remove</button>
                    <p class="subTotal">Total: <span class="item-total">${item.price * item.quantity}</span></p>
                </div>
            `;

            cartContentDiv.appendChild(itemDiv);

            total += item.price * item.quantity;

            const decreaseButton = itemDiv.querySelector('.decrease');
            const increaseButton = itemDiv.querySelector('.increase');
            const removeButton = itemDiv.querySelector('.remove');

            decreaseButton.addEventListener('click', () => decreaseQuantity(item.id));
            increaseButton.addEventListener('click', () => increaseQuantity(item.id));
            removeButton.addEventListener('click', () => removeFromCart(item.id));
        });

        cartTotal.textContent = total.toFixed(2);
    }

    function decreaseQuantity(id) {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity = item.quantity > 1 ? item.quantity - 1 : 1;
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCartItems();
        }
    }

    function increaseQuantity(id) {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity++;
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCartItems();
        }
    }

    function removeFromCart(id) {
        const index = cart.findIndex(item => item.id === id);
        if (index !== -1) {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCartItems();
        }
    }

    renderCartItems();
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('nav').style.opacity = "1";
    } else {
        document.querySelector('nav').style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
}