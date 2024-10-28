document.addEventListener('DOMContentLoaded', () => {
    
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const cartContainer = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');

    function renderCartItems() {
        cartContainer.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
                
            itemDiv.style.borderBottom = '2px solid black';
            itemDiv.style.paddingTop = '20px';
            itemDiv.style.display ='flex';

            let sizesOptions = item.sizes?.map(size => `<option value="${size}">${size}</option>`).join('');


            itemDiv.innerHTML = `
            <div>
            <div>
            <img src="${item.imgUrl}" alt="${item.name}" style="width: 100px; height: 100px;">
            </div>
                
                <div class="item-details"style="padding-left: 20px" s>
                    <h3>${item.name}</h3>
                    <p>Price: ${item.price}</p>
                    
                     <div>
                        <label for="sizes-${item.id}">Choose a size:</label>
                        <select id="sizes-${item.id}" class="size-select">
                            ${sizesOptions}
                        </select>
                    </div>
                    <p>Description: ${item.description}</p>
                    <div class="quantity" style="display: flex; align-items: center; ">
                        <button class="decrease" data-id="${item.id}">-</button>
                        <div><h4 style="width: 20px ; height: 20px; padding-left: 5px;">${item.quantity}</h4></div>
                        <button class="increase" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove" data-id="${item.id}">Remove</button>
                    <p>Total: <span class="item-total">${item.price}</span></p>
                </div>
            `;
            cartContainer.appendChild(itemDiv);

            const itemTotal = itemDiv.querySelector('.item-total');
            total += item.price*item.quantity;
            itemTotal.textContent = item.price*item.quantity;

            const decreaseButton = itemDiv.querySelector('.decrease');
            const increaseButton = itemDiv.querySelector('.increase');
            const removeButton = itemDiv.querySelector('.remove');


            decreaseButton.addEventListener('click', () => decreaseQuantity(item.id));
            decreaseButton.style.width = '30px';
            decreaseButton.style.color = 'black';
            decreaseButton.style.backgroundColor = 'red'; 
            decreaseButton.style.height = '20px';
            increaseButton.addEventListener('click', () => increaseQuantity(item.id));
            increaseButton.style.width = '30px';
            increaseButton.style.color = 'black';
            
            increaseButton.style.backgroundColor = 'green';
            increaseButton.style.height = '20px';
            removeButton.addEventListener('click', () => removeFromCart(item.id));
        });

        cartTotal.textContent = total;
    }

    function decreaseQuantity(id) {
        
        const item = cartItems.find(item => item.id === id);
        
        if (item) {
            
            item.quantity = item.quantity > 1? item.quantity - 1 : 1;
            
            renderCartItems();
        }
    }

    function increaseQuantity(id) {
        const item = cartItems.find(item => item.id === id);
        
        if (item) {
            
            item.quantity++ ; 
            
            renderCartItems();
        }
    }

    function removeFromCart(id) {
        console.log(id)
        const index = cartItems.findIndex(item => item.id === id);
        if (index !== -1) {
            cartItems.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            renderCartItems();
        }
    }

    renderCartItems();
});

