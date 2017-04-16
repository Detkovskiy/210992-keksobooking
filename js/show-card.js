/**
 * Created by Yura on 12.04.17.
 */

'use strict';

window.showCard = function (evt) {
  var indexPin = evt.currentTarget.getAttribute('data-index');
  window.card.offerDialog.replaceChild(window.card.dialogBlock(indexPin), window.card.offerDialog.querySelector('.dialog__panel'));
  var containHidden = window.card.offerDialog.classList.contains('hidden');
  if (containHidden !== null) {
    window.card.offerDialog.classList.remove('hidden');
  }
  document.addEventListener('keydown', window.card.onEscPress);
};
window.card.offerDialog.replaceChild(window.card.dialogBlock(0), window.card.offerDialog.querySelector('.dialog__panel'));
