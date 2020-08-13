var nav = document.querySelector('.main-nav')
var closeButton = document.querySelector('.main-nav__toggle')
var openButton = document.querySelector('.page-header__logo')

closeButton.addEventListener('click', () => {
  console.log("close button click")
  nav.classList.add('main-nav--closed')
  nav.classList.remove('main-nav--opened')
})

openButton.addEventListener('click', () => {
  console.log("open button click")
  nav.classList.remove('main-nav--closed')
  nav.classList.add('main-nav--opened')
})
