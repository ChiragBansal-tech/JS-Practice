const cards = document.getElementsByClassName('card');
let movesDisplay = document.querySelector('.move-count');
let toggledCardArray = [];
let move = 0;
let winCount = 0;

const restart = document.getElementById('restart');

const imagesLinkArray = [
    {
        id: 1,
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20231122102833/AngularImage.png',
        newAlt: 'Angular Image'
    },
    {
        id: 2,
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20231122102835/html5Image.png',
        newAlt: 'HTML Image'
    },
    {
        id: 3,
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20231122102834/JSImage.jpg',
        newAlt: 'JavaScript Image'
    },
    {
        id: 4,
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20231122102833/reactImage.png',
        newAlt: 'React Image'
    },
    {
        id: 5,
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20231122102833/vueImage.png',
        newAlt: 'Vue Image'
    },
    {
        id: 6,
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20231122102834/JSImage.jpg',
        newAlt: 'JavaScript Image'
    },
    {
        id: 7,
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20231122102833/vueImage.png',
        newAlt: 'Vue Image'
    },
    {
        id: 8,
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20231122102835/html5Image.png',
        newAlt: 'Html Image'
    },
    {
        id: 9,
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20231122102834/CSS3Image.png',
        newAlt: 'Css Image'
    },
    {
        id: 10,
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20231122102833/AngularImage.png',
        newAlt: 'Angular Image'
    },
    {
        id: 11,
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20231122102834/CSS3Image.png',
        newAlt: 'Css Image'
    },
    {
        id: 12,
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20231122102833/reactImage.png',
        newAlt: 'React Image'
    }
]

const restartGame = () => {
    let toggledCard = document.getElementsByClassName('card toggled');
    imagesLinkArray.sort(() => Math.random() - 0.5);
    Object.values(toggledCard).forEach(function(el){
        setTimeout(() => {
            el.classList.remove('toggled');
        },0);
    })
    toggledCardArray.length = 0;
    move = 0;
    winCount = 0;
    movesDisplay.innerText = `Moves: ${move}`;
    let allImagesSrc = document.getElementsByClassName('card-image');
    Object.values(allImagesSrc).forEach((el,index) => {
        el.src = imagesLinkArray[index].image;
        el.alt = imagesLinkArray[index].newAlt;
        el.id = imagesLinkArray[index].id;
        el.style.display = 'none';
    })
}

restart.addEventListener('click', restartGame);

for(let i = 0 ; i < cards.length ; i++){
    cards[i].addEventListener('click' ,function(){
        if(this.classList.contains('toggled')) return;

        this.classList.add('toggled');
        let cardImage = this.querySelector('.card-image');
        let commonFrontImage = this.querySelector('.common-front-image');
        commonFrontImage.style.display = 'none';
        cardImage.style.display = 'block';

        toggledCardArray.push(this);

        if(toggledCardArray.length === 2){
            move++;

            let firstCard = toggledCardArray[0];
            let secondCard = toggledCardArray[1];

            if(firstCard.querySelector('.card-image').src === secondCard.querySelector('.card-image').src){
                winCount++;
                toggledCardArray = [];
                if(winCount === 6){
                    setTimeout(() =>{
                        alert(`Congratulations You Have Won the Game in ${move} Moves`);
                    },300);
                }
            }else{
                setTimeout(() => {
                    firstCard.querySelector('.common-front-image').style.display = 'block';
                    firstCard.querySelector('.card-image').style.display = 'none';
                    secondCard.querySelector('.common-front-image').style.display = 'block';
                    secondCard.querySelector('.card-image').style.display = 'none';
                    firstCard.classList.remove('toggled');
                    secondCard.classList.remove('toggled');
                    toggledCardArray = [];
                }, 500);
            }

            movesDisplay.innerText = `Moves: ${move}`;
        }
    }); 

}

document.addEventListener('DOMContentLoaded',restartGame);