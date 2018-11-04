// DOM variables
let divGames = document.querySelector('.games');
let divParallax = document.querySelector('.parallax');
let reactionTest = document.querySelector('.reactionTest');
let numberMemory = document.querySelector('.numberMemory');
let fastTyping = document.querySelector('.fastTyping');
let verbalMemory = document.querySelector('.verbalMemory');

document.addEventListener('scroll', event => {
    let offset = window.pageYOffset;
    divParallax.style.backgroundPositionY = offset * 0.7 + 'px';
});

reactionTest.addEventListener('click', event => {
    
});

numberMemory.addEventListener('click', event => {
    
});

verbalMemory.addEventListener('click', event => {
    
});

const gameDivOpacity = () => {
    divGames.style.opacity = '0';
    
}