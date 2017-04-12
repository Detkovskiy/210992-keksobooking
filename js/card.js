/**
 * Created by Yura on 12.04.17.
 */
'use strict';

window.card = (function () {

  var lodgeTemplate = document.getElementById('lodge-template').content;
  var blockAvatar = document.querySelector('.dialog__title');
  var imgAvatar = blockAvatar.getElementsByTagName('img');
  var iconRub = '&#x20bd;';

  /* формирование объявления */
  var dialogBlock = function (item) {
    var poster = lodgeTemplate.cloneNode(true);
    poster.querySelector('.lodge__title').textContent = window.data[item].offer.title;
    poster.querySelector('.lodge__address').textContent = window.data[item].offer.address;
    poster.querySelector('.lodge__price').innerHTML = window.data[item].offer.price + ' ' + iconRub + '/ночь';
    poster.querySelector('.lodge__type').textContent = window.data[item].offer.type;
    poster.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + window.data[item].offer.guests + ' гостей в ' + window.data[item].offer.rooms + ' комнатах';
    poster.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + window.data[item].offer.checkin + ', выезд до ' + window.data[item].offer.checkout;

    var arrRandomFeatures = window.data[item].offer.features;
    var fragmentFeatures = document.createDocumentFragment();
    for (var i = 0; i < arrRandomFeatures.length; i++) {
      var span = document.createElement('span');
      span.className = 'feature__image feature__image--' + window.data[item].offer.features[i];
      fragmentFeatures.appendChild(span);
    }
    poster.querySelector('.lodge__features').appendChild(fragmentFeatures);
    poster.querySelector('.lodge__description').textContent = window.data[item].offer.description;
    imgAvatar[0].setAttribute('src', window.data[item].author.avatar);

    return poster;
  };

  /* вывод первого объявления при загрузке страницы */
  var offerDialog = document.getElementById('offer-dialog');
  offerDialog.replaceChild(dialogBlock(0), offerDialog.querySelector('.dialog__panel'));

  /* оброботчик события - нажатие на ESC */
  var onEscPress = function (evt) {
    if (evt.keyCode === 27) {
      offerDialog.classList.add('hidden');
    }
  };

  /* добавляем обработчик, так как объявление открыто */
  document.addEventListener('keydown', onEscPress);

  /* функция закрытия объявления и удаления обработчика ESC */
  var closeDialog = function () {
    offerDialog.classList.add('hidden');
    document.removeEventListener('keydown', onEscPress);
  };

  /* оброботчик события - нажатие на крестик в окне объявления */
  var onCrossPress = function () {
    closeDialog();
    window.pin.delActivePin();
  };

  /* нажатие на крестик в окне объявления */
  var dialogClose = offerDialog.querySelector('.dialog__close');
  dialogClose.addEventListener('click', onCrossPress);


  /* вывод объявления в зависимости от индекса pin
   * проверка и удаление класса hidden */
  var openDialog = function (evt) {
    var indexPin = evt.currentTarget.getAttribute('data-index');
    offerDialog.replaceChild(dialogBlock(indexPin), offerDialog.querySelector('.dialog__panel'));
    var containHidden = offerDialog.classList.contains('hidden');
    if (containHidden !== null) {
      offerDialog.classList.remove('hidden');
    }
    document.addEventListener('keydown', onEscPress);
  };

  return {
    openDialog: openDialog
  };

})();
