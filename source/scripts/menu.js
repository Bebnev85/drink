export const initMenu = () => {
  const mediaQuery = window.matchMedia('(max-width: 767px)');
  if (mediaQuery.matches) {
    const button = document.querySelector('.main-nav__toggle');
    const menu = document.querySelector('.main-nav');
    menu.classList.remove('main-nav--nojs');
    button.addEventListener('click', () => {
      if (menu.classList.contains('main-nav--closed')) {
        menu.classList.add('main-nav--opened');
        menu.classList.remove('main-nav--closed');
      } else {
        menu.classList.add('main-nav--closed');
        menu.classList.remove('main-nav--opened');
      }
    });
  }
};
