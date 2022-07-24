// Showing menu - mobile and tablet

const hamburger = document.querySelector('.header__burger-btn');
const menu = document.querySelector('.menu--mobile');
const closeMenuBtn = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.style.transform = 'translateX(0)';
});

closeMenuBtn.addEventListener('click', () => {
  menu.style.transform = 'translateX(-100%)';
});
