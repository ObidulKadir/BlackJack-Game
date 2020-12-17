let blackjakGame ={
    'you' :{'scoreSpan':'#your-blackjack-result','div': '#your-box', 'score':0},
    'dealer' :{'scoreSpan':'#dealer-blackjack-result','div': '#dealer-box', 'score':0},
};
const YOU = blackjakGame['you'];
const DEALER = blackjakGame['dealer'];
const hitSound = new Audio('../sounds/swish.m4a')
document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);

function blackjackHit(){
    let cardImage = document.createElement('img');
    cardImage.src = './/images/Q.png';
    document.querySelector(YOU['div']).appendChild(cardImage);
    hitSound.play();
}