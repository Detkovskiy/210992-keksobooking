/**
 * Created by Yura on 12.04.17.
 */
'use strict';

window.card = (function () {

  var lodgeTemplate = document.getElementById('lodge-template').content;
  var blockAvatar = document.querySelector('.dialog__title');
  var imgAvatar = blockAvatar.getElementsByTagName('img');
  var iconRub = '&#x20bd;';
  var offerDialog = document.getElementById('offer-dialog');


  /* формирование объявления */

  var dialogBlock = function (item) {
    var poster = lodgeTemplate.cloneNode(true);


    poster.querySelector('.lodge__title').textContent = ss[item].offer.title;
    poster.querySelector('.lodge__address').textContent = ss[item].offer.address;
    poster.querySelector('.lodge__price').innerHTML = ss[item].offer.price + ' ' + iconRub + '/ночь';
    poster.querySelector('.lodge__type').textContent = ss[item].offer.type;
    poster.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + ss[item].offer.guests + ' гостей в ' + ss[item].offer.rooms + ' комнатах';
    poster.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + ss[item].offer.checkin + ', выезд до ' + ss[item].offer.checkout;

    var arrRandomFeatures = ss[item].offer.features;
    var fragmentFeatures = document.createDocumentFragment();
    for (var i = 0; i < arrRandomFeatures.length; i++) {
      var span = document.createElement('span');
      span.className = 'feature__image feature__image--' + ss[item].offer.features[i];
      fragmentFeatures.appendChild(span);
    }
    poster.querySelector('.lodge__features').appendChild(fragmentFeatures);
    poster.querySelector('.lodge__description').textContent = ss[item].offer.description;
    imgAvatar[0].setAttribute('src', ss[item].author.avatar);



    return poster;
  };

  /* вывод первого объявления при загрузке страницы */
  //offerDialog.replaceChild(dialogBlock(1), offerDialog.querySelector('.dialog__panel'));


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

  return {
    offerDialog: offerDialog,
    dialogBlock: dialogBlock,
    onEscPress: onEscPress
  };

})();
