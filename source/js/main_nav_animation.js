(() => {
  const nav = document.querySelector('.main-nav');
  const menuButton = document.querySelector('.main-nav__button');

  menuButton.classList.remove('main-nav__button--opened');
  nav.classList.remove('main-nav--opened')

  menuButton.addEventListener('click', () => {
    let expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !expanded);

    if (expanded) {
      menuButton.classList.add('main-nav__button--closed');
      menuButton.classList.remove('main-nav__button--opened');
      nav.classList.add('main-nav--closed')
      nav.classList.remove('main-nav--opened')
    } else {
      menuButton.classList.add('main-nav__button--opened');
      menuButton.classList.remove('main-nav__button--closed');
      nav.classList.add('main-nav--opened')
      nav.classList.remove('main-nav--closed')
    }
  });
})();
