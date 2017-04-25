/**
 * Created by Yura on 12.04.17.
 */
'use strict';

window.card = (function () {
  var lodgeTemplate = document.getElementById('lodge-template').content;
  var blockAvatar = document.querySelector('.dialog__title');
  var imgAvatar = blockAvatar.getElementsByTagName('img');
  var iconRub = '&#x20bd;';

  function translateTypeHouse(type) {
    switch (type) {
      case 'flat':
        return 'Квартира';
      case 'house':
        return 'Дом';
      default:
        return 'Бунгало';
    }
  }

  function renderImg(photos) {
    var img = document.createElement('img');
    img.setAttribute('src', photos);
    img.className = 'photo';
    img.width = '52';
    img.height = '42';
    return img;
  }

  /* формирование объявления */
  var dialogBlock = function (item, i) {
    var poster = lodgeTemplate.cloneNode(true);
    poster.querySelector('.lodge__title').textContent = item[i].offer.title;
    poster.querySelector('.lodge__address').textContent = item[i].offer.address;
    poster.querySelector('.lodge__price').innerHTML = item[i].offer.price + ' ' + iconRub + '/ночь';
    poster.querySelector('.lodge__type').textContent = translateTypeHouse(item[i].offer.type);
    poster.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + item[i].offer.guests + ' гостей в ' + item[i].offer.rooms + ' комнатах';
    poster.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + item[i].offer.checkin + ', выезд до ' + item[i].offer.checkout;

    var arrRandomFeatures = item[i].offer.features;
    var fragmentFeatures = document.createDocumentFragment();
    for (var j = 0; j < arrRandomFeatures.length; j++) {
      var span = document.createElement('span');
      span.className = 'feature__image feature__image--' + item[i].offer.features[j];
      fragmentFeatures.appendChild(span);
    }
    poster.querySelector('.lodge__features').appendChild(fragmentFeatures);
    poster.querySelector('.lodge__description').textContent = item[i].offer.description;
    for (j = 0; j < item[i].offer.photos.length; j++) {
      poster.querySelector('.lodge__photos').appendChild(renderImg(item[i].offer.photos[j]));
    }
    imgAvatar[0].setAttribute('src', item[i].author.avatar);

    return poster;
  };

  /* вывод первого объявления при загрузке страницы */
  var offerDialog = document.getElementById('offer-dialog');

  /* оброботчик события - нажатие на ESC */
  var onEscPress = function (evt) {
    if (evt.keyCode === 27) {
      offerDialog.classList.add('hidden');
      window.pin.delActivePin();
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
