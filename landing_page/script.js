// DOM variables
let divGames = document.querySelector('.games');
let divGame = document.querySelector('.divGame');
let divParallax = document.querySelector('.parallax');
let reactionTest = document.querySelector('.reactionTest');
let numberMemory = document.querySelector('.numberMemory');
let fastTyping = document.querySelector('.fastTyping');
let verbalMemory = document.querySelector('.verbalMemory');
let divReactionTest = document.querySelector('#reactionTest');
let divNumberMemory = document.querySelector('#numberMemory');
let divFastTyping = document.querySelector('#fastTyping');
let divVerbalMemory = document.querySelector('#verbalMemory');

// parallax effect
document.addEventListener('scroll', event => {
    let offset = window.pageYOffset;
    divParallax.style.backgroundPositionY = offset * 0.7 + 'px';
});

reactionTest.addEventListener('click', event => {
    gameDivOpacity();
    divReactionTest.style.display = 'block';
    setTimeout(function(){
        divReactionTest.style.opacity = '1';
    }, 500);
});

numberMemory.addEventListener('click', event => {
    gameDivOpacity();
    divNumberMemory.style.display = 'block';
    setTimeout(function(){
        divNumberMemory.style.opacity = '1';
    }, 500);
});

fastTyping.addEventListener('click', event => {
    gameDivOpacity();
    divFastTyping.style.display = 'block';
    setTimeout(function(){
        divFastTyping.style.opacity = '1';
    }, 500);
});

verbalMemory.addEventListener('click', event => {
    gameDivOpacity();
    divVerbalMemory.style.display = 'block';
    setTimeout(function(){
        divVerbalMemory.style.opacity = '1';
    }, 500);
});

const gameDivOpacity = () => {
    divGames.style.opacity = '0';
}