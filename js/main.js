'use strict';
function toggleMenu() {
  var elBtn = document.querySelector('.card-menu-btn');
  var elClose = document.querySelector('.close-menu-btn');
  document.body.classList.toggle('menu-open');
  elBtn.classList.toggle('hide');
  elClose.classList.toggle('hide');
}
function toggleModal() {
    var elModal = document.querySelector('.modal');
    var elScreen = document.querySelector('.modal-back');
    elModal.classList.toggle('open');
    elScreen.classList.toggle('off');
  }