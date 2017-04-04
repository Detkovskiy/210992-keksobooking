/**
 * Created by Yura on 31.03.17.
 */

'use strict';

var imgIndex = function (i) {
  if (i === 0) {
    i = '01';
  } else if (i < 10) {
    i = '0' + ++i;
  }
  return i;
};

var arrTitle = [
  'Большая уютная квартира',
  'Маленькая неуютная квартира',
  'Огромный прекрасный дворец',
  'Маленький ужасный дворец',
  'Красивый гостевой домик',
  'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря',
  'Неуютное бунгало по колено в воде'
];

var arrType = [
  'flat',
  'house',
  'bungalo'
];

var arrCheckin = [
  '12:00',
  '13:00',
  '14:00'
];

var arrCheckout = [
  '12:00',
  '13:00',
  '14:00'
];

var arrFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

/* случайный элемент из массива */
var getRandomItemArr = function (arr) {
  var randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};

/* случайный число из периода */
var getRandomRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/* стоимость жилья */
var minRentPrice = 1000;
var maxRentPrice = 1000000;

/* особенности жилья */
var sizeFeatures = arrFeatures.length;
var getFeatures = function () {
  var rands = Math.floor(Math.random() * arrFeatures.length);
  rands = Math.floor(rands);

  if (rands === 0) {
    sizeFeatures = 1;
  } else {
    sizeFeatures = rands;
  }

  return sizeFeatures;
};

/* формирование случайного объявления */
var object = function (i) {
  return {
    author: {
      avatar: 'img/avatars/user' + imgIndex(i) + '.png'
    },
    offer: {
      title: getRandomItemArr(arrTitle),
      address: 'location.x, location.y',
      price: getRandomRange(minRentPrice, maxRentPrice),
      type: getRandomItemArr(arrType),
      rooms: getRandomRange(1, 5),
      guests: getRandomRange(1, 10),
      checkin: getRandomItemArr(arrCheckin),
      checkout: getRandomItemArr(arrCheckout),
      features: getFeatures(),
      description: ' ',
      photos: []
    },
    location: {
      X: getRandomRange(300, 900),
      Y: getRandomRange(100, 500)
    }
  };
};

/* создание массива объявлений */
var arrObject = function () {
  arrObject = [];
  for (var i = 0; i <= 8; i++) {
    arrObject.push(object(i));
  }
    return arrObject;
};

/* генерация и вывод иконок жильцов */
var tokioPins = document.querySelector('.tokyo__pin-map');
var fragment = document.createDocumentFragment();
var sizeIconPin = {
  width: 56,
  height: 75
};

for (var i = 0; i < 8; i++) {
  /* координата по Х и Y */
  var getX = getRandomRange(300, 900);
  var getY = getRandomRange(100, 500);

  var div = document.createElement('div');
  div.className = 'pin';
  div.setAttribute('style', 'left:' + (getX + (sizeIconPin.width / 2)) + 'px; top:' + (getY + sizeIconPin.height) + 'px;');

  var img = document.createElement('img');
  img.className = 'rounded';
  img.height = '40';
  img.width = '40';
  img.setAttribute('src', 'img/avatars/user' + imgIndex(i) + '.png');

  div.appendChild(img);
  fragment.appendChild(div);
}

tokioPins.appendChild(fragment);

/* заполнение шаблона */
var lodgeTemplate = document.getElementById('lodge-template').content;
var poster = lodgeTemplate.cloneNode(true);

poster.querySelector('.lodge__title').textContent = getRandomItemArr(arrTitle);
poster.querySelector('.lodge__address').textContent = object(0).offer.address;
var iconRub = '&#x20bd;';
poster.querySelector('.lodge__price').innerHTML = getRandomRange(minRentPrice, maxRentPrice) + ' ' + iconRub + '/ночь';

var lodgeType = '';

if (getRandomItemArr(arrType) === 'flat') {
  lodgeType = 'Квартира';
} else if (getRandomItemArr(arrType) === 'bungalo') {
  lodgeType = 'Бунгало';
} else {
  lodgeType = 'Дом';
}

poster.querySelector('.lodge__type').textContent = lodgeType;
poster.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + getRandomRange(1, 10) + ' гостей в ' + getRandomRange(1, 5) + ' комнатах';
poster.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + getRandomItemArr(arrCheckin) + ', выезд до ' + getRandomItemArr(arrCheckout);

arrFeatures.length = getFeatures();
var fragmentFeatures = document.createDocumentFragment();
for (var j = 0; j < arrFeatures.length; j++) {
  var span = document.createElement('span');
  span.className = 'feature__image feature__image--' + arrFeatures[j];

  fragmentFeatures.appendChild(span);
}
poster.querySelector('.lodge__features').appendChild(fragmentFeatures);
poster.querySelector('.lodge__description').textContent = object(0).offer.description;

var blockAvatar = document.querySelector('.dialog__title');
var imgAvatar = blockAvatar.getElementsByTagName('img');
imgAvatar[0].setAttribute('src', 'img/avatars/user' + imgIndex(0) + '.png');

var offerDialog = document.getElementById('offer-dialog');
var dialogPanel = offerDialog.querySelector('.dialog__panel');
offerDialog.removeChild(dialogPanel);
offerDialog.appendChild(poster);
