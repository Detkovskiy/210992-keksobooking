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

/* функция случайного элемента из массива */
var getRandomItemArr = function (arr) {
  var randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};

/* функция случайного числа из периода */
var getRandomRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/* переменные стоимости жилья */
var minRentPrice = 1000;
var maxRentPrice = 1000000;

/* формирование особенностей жилья */
var renderFeatures = function () {
  var sizeFeatures = arrFeatures.length;
  var randomNumber = Math.floor(Math.random() * arrFeatures.length);

  if (randomNumber === 0) {
    sizeFeatures = 1;
  } else {
    sizeFeatures = randomNumber;
  }

  var features = [];
  for (var i = 0; i < sizeFeatures; i++) {
    features.push(arrFeatures[i]);
  }

  return features;
};

/* определение типа жилья */
var lodgeType = function () {
  var type = '';
  if (getRandomItemArr(arrType) === 'flat') {
    type = 'Квартира';
  } else if (getRandomItemArr(arrType) === 'bungalo') {
    type = 'Бунгало';
  } else {
    type = 'Дом';
  }
  return type;
};

/* функция генирирования координат объявления */
var generateAddress = function () {
  return {x: getRandomRange(300, 900), y: getRandomRange(100, 500)};
};

/* формирование случайного объявления */
var object = function (i) {

  var addressObject = generateAddress();

  return {
    author: {
      avatar: 'img/avatars/user' + imgIndex(i) + '.png'
    },
    offer: {
      title: getRandomItemArr(arrTitle),
      address: addressObject.x + ', ' + addressObject.y,
      price: getRandomRange(minRentPrice, maxRentPrice),
      type: lodgeType(),
      rooms: getRandomRange(1, 5),
      guests: getRandomRange(1, 10),
      checkin: getRandomItemArr(arrCheckin),
      checkout: getRandomItemArr(arrCheckout),
      features: renderFeatures(),
      description: ' ',
      photos: []
    },
    location: {
      x: addressObject.x,
      y: addressObject.y
    }
  };
};

/* создание массива объявлений */
var objects = function () {
  objects = [];
  for (var i = 0; i <= 8; i++) {
    objects.push(object(i));
  }
  return objects;
};

/* массив с объявлениями */
var arrObject = objects();

/* формирование одного pin */
var sizeIconPin = {
  width: 56,
  height: 75
};

var generatePin = function (i) {
  var getX = arrObject[i].location.x;
  var getY = arrObject[i].location.y;
  var div = document.createElement('div');
  div.className = 'pin';
  div.setAttribute('style', 'left:' + (getX + (sizeIconPin.width / 2)) + 'px; top:' + (getY + sizeIconPin.height) + 'px;');
  div.setAttribute('data-index', i);

  var img = document.createElement('img');
  img.className = 'rounded';
  img.height = '40';
  img.width = '40';
  img.setAttribute('src', arrObject[i].author.avatar);
  img.setAttribute('tabindex', '0');
  div.appendChild(img);

  return div;
};

/* отрисовка pin в фрагмент */
var tokioPins = document.querySelector('.tokyo__pin-map');
var fragment = document.createDocumentFragment();
var renderPins = function () {

  for (var i = 0; i < 8; i++) {
    var pin = generatePin(i);
    fragment.appendChild(pin);
  }

  tokioPins.appendChild(fragment);
  return tokioPins;
};

/* отрисовка pin на карте */
renderPins(); // можно так оставить???

var lodgeTemplate = document.getElementById('lodge-template').content;
var blockAvatar = document.querySelector('.dialog__title');
var imgAvatar = blockAvatar.getElementsByTagName('img');
var iconRub = '&#x20bd;';

/* формирование объявления */
var dialogBlock = function (item) {
  var poster = lodgeTemplate.cloneNode(true);
  poster.querySelector('.lodge__title').textContent = arrObject[item].offer.title;
  poster.querySelector('.lodge__address').textContent = arrObject[item].offer.address;
  poster.querySelector('.lodge__price').innerHTML = arrObject[item].offer.price + ' ' + iconRub + '/ночь';
  poster.querySelector('.lodge__type').textContent = arrObject[item].offer.type;
  poster.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + arrObject[item].offer.guests + ' гостей в ' + arrObject[item].offer.rooms + ' комнатах';
  poster.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + arrObject[item].offer.checkin + ', выезд до ' + arrObject[item].offer.checkout;

  var arrRandomFeatures = arrObject[item].offer.features;
  var fragmentFeatures = document.createDocumentFragment();
  for (var i = 0; i < arrRandomFeatures.length; i++) {
    var span = document.createElement('span');
    span.className = 'feature__image feature__image--' + arrFeatures[i];

    fragmentFeatures.appendChild(span);
  }

  poster.querySelector('.lodge__features').appendChild(fragmentFeatures);
  poster.querySelector('.lodge__description').textContent = arrObject[item].offer.description;
  imgAvatar[0].setAttribute('src', arrObject[item].author.avatar);

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
  delActivePin();
};

/* нажатие на крестик в окне объявления */
var dialogClose = offerDialog.querySelector('.dialog__close');
dialogClose.addEventListener('click', onCrossPress);

/* перестановка pin--active */
var changeActivePins = function (item) {
  var pinActive = tokioPins.querySelector('.pin--active');
  if (pinActive !== null) {
    pinActive.classList.remove('pin--active');
  }
  item.classList.add('pin--active');
};

/* удаление класса pin--active (используется при закрытии объявления) */
var delActivePin = function () {
  var pinActive = tokioPins.querySelector('.pin--active');
  if (pinActive !== null) {
    pinActive.classList.remove('pin--active');
  }
};

/* вывод объявления в зависимости от индекса pin
 * проверка и удаление класса hidden */
var openDialog = function (evt) {
  var indexPin = evt.currentTarget.getAttribute('data-index');
  offerDialog.replaceChild(dialogBlock(indexPin), offerDialog.querySelector('.dialog__panel'));
  var containHidden = offerDialog.classList.contains('hidden');
  if (containHidden !== null) {
    offerDialog.classList.remove('hidden');
  }
};

/* отслеживание нажатия на pin
 * перестановка класса Active на нажатый pin
 * открытие объявления по индексу pin */
var pins = tokioPins.querySelectorAll('.pin');
changeActivePins(pins[0]);
for (var i = 0; i <= 8; i++) {

  pins[i].addEventListener('click', function (evt) {
    changeActivePins(evt.currentTarget);
    openDialog(evt);
  });

  pins[i].addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      changeActivePins(evt.currentTarget);
      openDialog(evt);
    }
  });
}
