const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hrHand = document.querySelector('.hr-hand');

function setClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);
    hrHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setClock, 1000);
setClock();
