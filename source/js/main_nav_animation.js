// var nav = document.querySelector('.main-nav')
// var closeButton = document.querySelector('.main-nav__toggle')
// var openButton = document.querySelector('.page-header__logo')

// closeButton.addEventListener('click', () => {
//   console.log("close button click")
//   nav.classList.add('main-nav--closed')
//   nav.classList.remove('main-nav--opened')
// })

// openButton.addEventListener('click', () => {
//   console.log("open button click")
//   nav.classList.remove('main-nav--closed')
//   nav.classList.add('main-nav--opened')
// })

(() => {
  const menuButton = document.querySelector('.main-nav__button');
  const menuList = document.querySelector('.main-nav__list');

  menuButton.addEventListener('click', () => {
    let expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !expanded);
    menuButton.classList.toggle('main-nav__button--open');
    menuList.classList.toggle('main-nav__list--open');
  });
})();
