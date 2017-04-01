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

/* генерация  заголовка */
var getTitle = function () {
  var rands = Math.floor(Math.random() * arrTitle.length);
  rands = Math.floor(rands);
  var title = arrTitle[rands];
  return title;
};

/* генерация стоимости */
var getPrice = function () {
  var rand = 1000 + Math.random() * (1000000 + 1 - 1000);
  rand = Math.floor(rand);
  return rand;
};

/* генерация типа жилья */
var getType = function () {
  var rand = Math.floor(Math.random() * arrType.length);
  rand = Math.floor(rand);
  return arrType[rand];
};

/* генерация кол-ва комнат */
var getRooms = function () {
  var rand = 1 + Math.random() * (5 + 1 - 1);
  rand = Math.floor(rand);
  return rand;
};

/* генерация кол-ва гостей */
var getGuests = function () {
  var rand = 1 + Math.random() * (10 + 1 - 1);
  rand = Math.floor(rand);
  return rand;
};

/* время заезда */
var getCheckin = function () {
  var rand = Math.floor(Math.random() * arrCheckin.length);
  rand = Math.floor(rand);
  return arrCheckin[rand];
};

/* время выезда */
var getCheckout = function () {
  var rand = Math.floor(Math.random() * arrCheckout.length);
  rand = Math.floor(rand);
  return arrCheckout[rand];
};

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

/* координата по Х */
var getX = function () {
  var rand = 300 + Math.random() * (900 + 1 - 300);
  rand = Math.floor(rand);
  return rand;
};

/* координата по Y */
var getY = function () {
  var rand = 100 + Math.random() * (500 + 1 - 100);
  rand = Math.floor(rand);
  return rand;
};

/* массив с 8-ю объектами*/
var objects = [
  {
    author: {
      avatar: arrImgAvatar[0]
    },
    offer: {
      title: getTitle(),
      address: 'location.x, location.y',
      price: getPrice(),
      type: getType(),
      rooms: getRooms(),
      guests: getGuests(),
      checkin: getCheckin(),
      checkout: getCheckout(),
      features: getFeatures(),
      description: 'Первый (тест)',
      photos: []
    },
    location: {
      X: getX(),
      Y: getY()
    }
  },
  {
    author: {
      avatar: arrImgAvatar[1]
    },
    offer: {
      title: getTitle(),
      address: 'location.x, location.y',
      price: getPrice(),
      type: getType(),
      rooms: getRooms(),
      guests: getGuests(),
      checkin: getCheckin(),
      checkout: getCheckout(),
      features: getFeatures(),
      description: '',
      photos: []
    },
    location: {
      X: getX(),
      Y: getY()
    }
  },
  {
    author: {
      avatar: arrImgAvatar[2]
    },
    offer: {
      title: getTitle(),
      address: 'location.x, location.y',
      price: getPrice(),
      type: getType(),
      rooms: getRooms(),
      guests: getGuests(),
      checkin: getCheckin(),
      checkout: getCheckout(),
      features: getFeatures(),
      description: '',
      photos: []
    },
    location: {
      X: getX(),
      Y: getY()
    }
  },
  {
    author: {
      avatar: arrImgAvatar[3]
    },
    offer: {
      title: getTitle(),
      address: 'location.x, location.y',
      price: getPrice(),
      type: getType(),
      rooms: getRooms(),
      guests: getGuests(),
      checkin: getCheckin(),
      checkout: getCheckout(),
      features: getFeatures(),
      description: '',
      photos: []
    },
    location: {
      X: getX(),
      Y: getY()
    }
  },
  {
    author: {
      avatar: arrImgAvatar[4]
    },
    offer: {
      title: getTitle(),
      address: 'location.x, location.y',
      price: getPrice(),
      type: getType(),
      rooms: getRooms(),
      guests: getGuests(),
      checkin: getCheckin(),
      checkout: getCheckout(),
      features: getFeatures(),
      description: '',
      photos: []
    },
    location: {
      X: getX(),
      Y: getY()
    }
  },
  {
    author: {
      avatar: arrImgAvatar[5]
    },
    offer: {
      title: getTitle(),
      address: 'location.x, location.y',
      price: getPrice(),
      type: getType(),
      rooms: getRooms(),
      guests: getGuests(),
      checkin: getCheckin(),
      checkout: getCheckout(),
      features: getFeatures(),
      description: '',
      photos: []
    },
    location: {
      X: getX(),
      Y: getY()
    }
  },
  {
    author: {
      avatar: arrImgAvatar[6]
    },
    offer: {
      title: getTitle(),
      address: 'location.x, location.y',
      price: getPrice(),
      type: getType(),
      rooms: getRooms(),
      guests: getGuests(),
      checkin: getCheckin(),
      checkout: getCheckout(),
      features: getFeatures(),
      description: '',
      photos: []
    },
    location: {
      X: getX(),
      Y: getY()
    }
  },
  {
    author: {
      avatar: arrImgAvatar[7]
    },
    offer: {
      title: getTitle(),
      address: 'location.x, location.y',
      price: getPrice(),
      type: getType(),
      rooms: getRooms(),
      guests: getGuests(),
      checkin: getCheckin(),
      checkout: getCheckout(),
      features: getFeatures(),
      description: '',
      photos: []
    },
    location: {
      X: getX(),
      Y: getY()
    }
  }
];

/* генерация и вывод иконок жильцов */
var tokioPins = document.querySelector('.tokyo__pin-map');
var fragment = document.createDocumentFragment();
var sizeIconPin = {
  width: 56,
  height: 75
};

for (var i = 0; i < objects.length; i++) {
  var div = document.createElement('div');
  div.className = 'pin';
  div.setAttribute('style', 'left:' + (getX() + (sizeIconPin.width / 2)) + 'px; top:' + (getY() + sizeIconPin.height) + 'px;');

  var img = document.createElement('img');
  img.className = 'rounded';
  img.heigth = '40';
  img.width = '40';
  img.setAttribute('src', arrImgAvatar[i]);

  div.appendChild(img);
  fragment.appendChild(div);
}

tokioPins.appendChild(fragment);

/* заполнение шаблона */
var lodgeTemplate = document.getElementById('lodge-template').content;
var poster = lodgeTemplate.cloneNode(true);

poster.querySelector('.lodge__title').textContent = getTitle();
poster.querySelector('.lodge__address').textContent = objects[0].offer.address;
var iconRub = '&#x20bd;';
poster.querySelector('.lodge__price').innerHTML = getPrice() + ' ' + iconRub + '/ночь';

var lodgeType = '';

if (getType() === 'flat') {
  lodgeType = 'Квартира';
} else if (getType() === 'bungalo') {
  lodgeType = 'Бунгало';
} else {
  lodgeType = 'Дом';
}

poster.querySelector('.lodge__type').textContent = lodgeType;
poster.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + getGuests() + ' гостей в ' + getRooms() + ' комнатах';
poster.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + getCheckin() + ', выезд до ' + getCheckout();

arrFeatures.length = getFeatures();
var fragmentFeatures = document.createDocumentFragment();
for (var j = 0; j < arrFeatures.length; j++) {
  var span = document.createElement('span');
  span.className = 'feature__image feature__image--' + arrFeatures[j];

  fragmentFeatures.appendChild(span);
}
poster.querySelector('.lodge__features').appendChild(fragmentFeatures);
poster.querySelector('.lodge__description').textContent = objects[0].offer.description;

var blockAvatar = document.querySelector('.dialog__title');
var imgAvatar = blockAvatar.getElementsByTagName('img');
imgAvatar[0].setAttribute('src', arrImgAvatar[0]);

var offerDialog = document.getElementById('offer-dialog');
var dialogPanel = offerDialog.querySelector('.dialog__panel');
offerDialog.removeChild(dialogPanel);
offerDialog.appendChild(poster);
