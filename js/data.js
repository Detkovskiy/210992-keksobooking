/**
 * Created by Yura on 12.04.17.
 */

'use strict';

/* запись в глобальную область массива с сгенерированными объявлениями */
window.data = (function () {

  /* объект с константами */
  var constantObject = {
    MIN_RENT_PRICE: 1000,
    MAX_RENT_PRICE: 1000000,
    MIN_ROOMS: 1,
    MAX_ROOMS: 5,
    MIN_GUESTS: 1,
    MAX_GUESTS: 10
  };

  /* объект с информацией о жилье */
  var infoObject = {
    arrTitle: [
      'Большая уютная квартира',
      'Маленькая неуютная квартира',
      'Огромный прекрасный дворец',
      'Маленький ужасный дворец',
      'Красивый гостевой домик',
      'Некрасивый негостеприимный домик',
      'Уютное бунгало далеко от моря',
      'Неуютное бунгало по колено в воде'
    ],
    arrType: ['flat', 'house', 'bungalo'],
    arrCheckin: ['12:00', '13:00', '14:00'],
    arrCheckout: ['12:00', '13:00', '14:00'],
    arrFeatures: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
  };

  /* функция случайного элемента из массива */
  var getRandomItemArr = function (arr) {
    var randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
  };

  /* функция случайного числа из периода */
  var getRandomRange = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  var imgIndex = function (i) {
    if (i === 0) {
      i = '01';
    } else {
      i = (i < 10) ? ('0' + ++i) : i;
    }
    return i;
  };

  /* формирование особенностей жилья */
  var quantityFeatures = function () {
    var sizeFeatures = infoObject.arrFeatures.length;
    var randomNumber = Math.floor(Math.random() * sizeFeatures);
    sizeFeatures = (randomNumber === 0) ? 1 : randomNumber;
    var features = [];
    for (var i = 0; i < sizeFeatures; i++) {
      features.push(infoObject.arrFeatures[i]);
    }
    return features;
  };

  /* определение типа жилья */
  var lodgeType = function () {
    var type = '';
    var randomType = getRandomItemArr(infoObject.arrType);
    if (randomType === 'flat') {
      type = 'Квартира';
    } else if (randomType === 'bungalo') {
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
  var renderOneObject = function (i) {
    var addressObject = generateAddress();
    return {
      author: {
        avatar: 'img/avatars/user' + imgIndex(i) + '.png'
      },
      offer: {
        title: getRandomItemArr(infoObject.arrTitle),
        address: addressObject.x + ', ' + addressObject.y,
        price: getRandomRange(constantObject.MIN_RENT_PRICE, constantObject.MAX_RENT_PRICE),
        type: lodgeType(),
        rooms: getRandomRange(constantObject.MIN_ROOMS, constantObject.MAX_ROOMS),
        guests: getRandomRange(constantObject.MIN_GUESTS, constantObject.MAX_GUESTS),
        checkin: getRandomItemArr(infoObject.arrCheckin),
        checkout: getRandomItemArr(infoObject.arrCheckout),
        features: quantityFeatures(),
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
  var objects = (function () {
    objects = [];
    for (var i = 0; i <= 8; i++) {
      objects.push(renderOneObject(i));
    }
    return objects;
  })();

  return objects;

})();
