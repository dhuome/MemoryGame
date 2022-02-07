// define and get some elements
const section = document.querySelector("section");
const playerLifeCount = document.querySelector("span");
let playerLife = 20;
var match = new Audio("bell.mp3");
var lost = new Audio("lost.mp3");

//link the life with the text in the page
playerLifeCount.textContent = playerLife;

//generate the data for the the cards
const getData = () => [
{ imgSrc: "./images/avengers.png", name: "avengers" },
{ imgSrc: "./images/blackwidow.png", name: "blackwidow" },
{ imgSrc: "./images/captainamerica.png", name: "captainamerica" },
{ imgSrc: "./images/hawkeye.png", name: "hawkeye" },
{ imgSrc: "./images/hulk.png", name: "hulk" },
{ imgSrc: "./images/ironman.png", name: "ironman" },
{ imgSrc: "./images/spiderman.png", name: "spiderman" },
{ imgSrc: "./images/thor.png", name: "thor" },
{ imgSrc: "./images/avengers.png", name: "avengers" },
{ imgSrc: "./images/blackwidow.png", name: "blackwidow" },
{ imgSrc: "./images/captainamerica.png", name: "captainamerica" },
{ imgSrc: "./images/hawkeye.png", name: "hawkeye" },
{ imgSrc: "./images/hulk.png", name: "hulk" },
{ imgSrc: "./images/ironman.png", name: "ironman" },
{ imgSrc: "./images/spiderman.png", name: "spiderman" },
{ imgSrc: "./images/thor.png", name: "thor" },

];

// randomaiz the data of cards

const Randomaiz = () => {
const cardData = getData();
  //this will randomaiz the data
cardData.sort(() => Math.random() - 0.5);
return cardData;
};

// card generate function
const cardGenerator = () => {
const cardData = Randomaiz();
  //generate the html

  //so we can make card for each picture
    cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");

    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //attach the information

    face.src = item.imgSrc;
    card.setAttribute('name', item.name);

    // attach the card to section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    card.addEventListener("click", (e) => {
    card.classList.toggle("toggleCard");
    checkCards(e);
    });
});
};

//check if match

const checkCards = (e) => {
const clickedCard = e.target;
clickedCard.classList.add("flipped"); 
const flippedCards = document.querySelectorAll('.flipped');
const toggleCard = document.querySelectorAll('.toggleCard');

if(flippedCards.length === 2){

    if(flippedCards[0].getAttribute("name") == flippedCards[1].getAttribute("name")){
        match.play(match.mp3);
        flippedCards.forEach(card => {
            card.classList.remove("flipped");
            card.style.pointerEvents = "none";
        });

    }else{
        lost.play(lost.mp3);
        flippedCards.forEach(card => {
            card.classList.remove("flipped");
            setTimeout(() => card.classList.remove("toggleCard"),1000);
        });
        playerLife --;
        playerLifeCount.textContent = playerLife;
        if(playerLife == 0){
            reset("You lost the game ): try again.");
        }
    }   
}
// check if the user win 
if (toggleCard.length === 16){
    reset("You Win the game :)");

}
};

//reset the game 

const reset = (text) => {

    let cardData = Randomaiz();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll('.card');
    section.style.pointerEvents = "none";

    cardData.forEach((item,index) => {
        cards[index].classList.remove('toggleCard');

        //randomaiz the data
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all';
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            section.style.pointerEvents = "all";

        },1000);
    });
    playerLife = 20;
    playerLifeCount.textContent = playerLife;
    setTimeout(() => window.alert(text),100);



}

cardGenerator();

