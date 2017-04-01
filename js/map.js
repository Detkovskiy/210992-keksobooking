/**
 * Created by Yura on 31.03.17.
 */

'use strict';

var imgIndex = function (i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
};

var arrImgAvatar = [
  'img/avatars/user' + imgIndex(1) + '.png',
  'img/avatars/user' + imgIndex(2) + '.png',
  'img/avatars/user' + imgIndex(3) + '.png',
  'img/avatars/user' + imgIndex(4) + '.png',
  'img/avatars/user' + imgIndex(5) + '.png',
  'img/avatars/user' + imgIndex(6) + '.png',
  'img/avatars/user' + imgIndex(7) + '.png',
  'img/avatars/user' + imgIndex(8) + '.png'
];

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

var author = {
  avatar: arrImgAvatar
};

var offer = {
  title: arrTitle,
  address: 'location.x, location.y',
  price: function () {
          var rand = 1000 + Math.random() * (1000000 + 1 - 1000);
          rand = Math.floor(rand);
          return rand;
        },
  type: function () {
          var rand = Math.floor(Math.random() * arrType.length);
          rand = Math.floor(rand);
          return arrType[rand];
        },
  rooms: function () {
            var rand = 1 + Math.random() * (5 + 1 - 1);
            rand = Math.floor(rand);
            return rand;
        },
  guests: function () {
            var rand = 1 + Math.random() * (10 + 1 - 1);
            rand = Math.floor(rand);
            return rand;
          },
  checkin: function () {
              var rand = Math.floor(Math.random() * arrCheckin.length);
              rand = Math.floor(rand);
              return arrCheckin[rand];
            },
  checkout: function () {
              var rand = Math.floor(Math.random() * arrCheckout.length);
              rand = Math.floor(rand);
              return arrCheckout[rand];
            },
  features: function () {
              var rand = Math.floor(Math.random() * arrFeatures.length);
              rand = Math.floor(rand);
              var strokeFeatures = '';

              if (rand == 0) {
                strokeFeatures = arrFeatures[rand];
              } else {
                for (var i = 0; i < rand; i++) {
                  strokeFeatures = strokeFeatures + ' ' + arrFeatures[i];
                }
              }
              return strokeFeatures;
            },
  description: '',
  photos: []
};


var massive = {
  location: {
    x: function () {
      var rand = 90 + Math.random() * (300 + 1 - 90);
      rand = Math.floor(rand);
      return rand;
    },
    y: function () {
      var rand = 50 + Math.random() * (100 + 1 - 50);
      rand = Math.floor(rand);
      return rand;
    }
  }
};
