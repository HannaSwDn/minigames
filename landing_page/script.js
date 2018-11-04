let parallax = document.querySelector('.parallax');

document.addEventListener('scroll', event => {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
})