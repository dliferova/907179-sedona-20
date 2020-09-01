(() => {
  const modal = document.querySelector('#modal-failed');
  const okButton = document.querySelector('#modal-failed-ok');
  const form = document.querySelector('#review-form');

  form.addEventListener('invalid', () => {
    modal.classList.add('review-form__modal-failed--visible');
    modal.classList.remove('review-form__modal-failed--hidden');
  }, true)


  okButton.addEventListener('click', () => {
    modal.classList.remove('review-form__modal-failed--visible');
    modal.classList.add('review-form__modal-failed--hidden');
  })
})();
