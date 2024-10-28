const services = [
    {
        id: '1',
        name: "Deep Cleaning",
        price: 100,
        imgUrl: 'Item-1.webp',
        duration: '1 hour',
        description: 'Thorough cleaning in every nook and cranny of your home.',
        detaileddescription:'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'
    },
    {
        id: '2',
        name: "Furniture Cleaning",
        price: 150,
        imgUrl: 'Item-2.webp',
        duration: '1.5 hour',
        description: 'Thorough cleaning in every nook and cranny of your home.',
        detaileddescription:'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'
    },
    {
        id: '3',
        name: "Kitchen Cleaning",
        price: 200,
        imgUrl: 'Item-3.webp',
        duration: '3 hour',
        description: 'Thorough cleaning in every nook and cranny of your home.',
        detaileddescription:'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'
    },
    {
        id: '4',
        name: "Move In/Out",
        price: 300,
        imgUrl: 'Item-4.webp',
        duration: '5 hour',
        description: 'Thorough cleaning in every nook and cranny of your home.',
        detaileddescription:'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'
    },
    {
        id: '5',
        name: "Laundry",
        price: 5,
        imgUrl: 'Item-5.webp',
        duration: '10 Min/Piece',
        description: 'Thorough cleaning in every nook and cranny of your home.',
        detaileddescription:'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'
    },
    {
        id: '6',
        name: "Window Cleaning",
        price: 100,
        imgUrl: 'Item-6.webp',
        duration: '1 hour',
        description: 'Thorough cleaning in every nook and cranny of your home.',
        detaileddescription:'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'
    },
    {
        id: '7',
        name: "Office Cleaning",
        price: 300,
        imgUrl: 'Item-7.webp',
        duration: '6 hour',
        description: 'Thorough cleaning in every nook and cranny of your home.',
        detaileddescription:'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'
    }
];

let cart = [];

function renderItems() {
    let contentDiv = document.querySelector('.col-content');
    contentDiv.innerHTML = '';

    services.forEach((service, index) => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.style.borderBottom = '2px solid black';
        itemDiv.style.paddingTop = '20px';
        itemDiv.style.paddingBottom = '20px';
        itemDiv.style.display = 'flex';

        itemDiv.innerHTML = `
            <div><img src="${service.imgUrl}" alt="${service.name}" style="width: 200px; height: 200px; border-radius:20px"></div>
            <div style="padding-left: 20px ; width: 100%; color: rgb(10,35,35)">
                <h3>${service.name}</h3>
                <h4>Price: $${service.price}</h4>
                <p>Description: ${service.description}</p>
                <a class="read-more serviceModal" data-index="${index}" data-bs-toggle="modal" data-bs-target="#serviceModal">Read More</a>
                <div style="display: flex; justify-content: right; align-items: center;">
                    <button class="atc" style="height:40px; width:140px; color: white; background:rgb(10,35,35); border-radius:20px;">Add To Cart</button>
                </div>
            </div>
        `;

        contentDiv.appendChild(itemDiv);
    });

    document.querySelectorAll('.atc').forEach((button, index) => {
        button.addEventListener('click', () => {
            addToCart(services[index]);
        });
    });

    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', event => {
            const serviceIndex = event.target.getAttribute('data-index');
            showServiceDetails(serviceIndex);
        });
    });
}

function addToCart(service) {
    const existingService = cart.find(item => item.name === service.name);
    if (existingService) {
        existingService.quantity++;
    } else {
        const serviceWithQuantity = { ...service, quantity: 1 };
        cart.push(serviceWithQuantity);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${service.name} has been added to your cart.`);
}

function showServiceDetails(index) {
    const service = services[index];
    document.getElementById('serviceImage').src = service.imgUrl;
    document.getElementById('serviceName').innerText = service.name;
    document.getElementById('serviceDuration').innerText = `Duration: ${service.duration}`;
    document.getElementById('servicePrice').innerText = `Price: $${service.price}`;
    document.getElementById('serviceDescription').innerText = service.description;
    document.getElementById('serviceDetailedDescription').innerText = service.detaileddescription;
}

document.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    renderItems();
});