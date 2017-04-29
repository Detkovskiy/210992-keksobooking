/**
 * Created by Yura on 24.04.17.
 */

'use strict';

(function () {
  var tokyoFilters = document.querySelector('.tokyo__filters');
  var typeHouse = tokyoFilters.querySelector('#housing_type');
  var roomNumber = tokyoFilters.querySelector('#housing_room-number');
  var housePrice = tokyoFilters.querySelector('#housing_price');
  var guestsNumber = tokyoFilters.querySelector('#housing_guests-number');
  var housingFeatures = tokyoFilters.querySelector('#housing_features');
  var featuresInput = housingFeatures.getElementsByTagName('input');
  var DEBOUNCE_INTERVAL = 500;
  var lastTimeout;

  var debounce = function (fun) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(fun, DEBOUNCE_INTERVAL);
  };

  /* функция фильтрации типа жилья */
  var filterTypeHouse = function (data) {
    switch (typeHouse.value) {
      case 'flat':
        return data.offer.type === 'flat';
      case 'house':
        return data.offer.type === 'house';
      case 'bungalo':
        return data.offer.type === 'bungalo';
      default:
        return true;
    }
  };

  /* функция фильтрации цены */
  var filterHousePrice = function (data) {
    switch (housePrice.value) {
      case 'low':
        return data.offer.price < 10000;
      case 'middle':
        return (data.offer.price >= 10000) && (data.offer.price <= 50000);
      default:
        return data.offer.price > 50000;
    }
  };

  /* функция фильтрации количества комнат */
  var filterRoomNumber = function (data) {
    switch (roomNumber.value) {
      case '1':
        return data.offer.rooms === 1;
      case '2':
        return data.offer.rooms === 2;
      case '3':
        return data.offer.rooms === 3;
      default:
        return true;
    }
  };

  /* функция фильтрации количества гостей */
  var filterGuestsNumber = function (data) {
    switch (guestsNumber.value) {
      case '1':
        return data.offer.guests === 1;
      case '2':
        return data.offer.guests === 2;
      default:
        return true;
    }
  };

  /* поиск элемента в массиве */
  var searchElement = function (arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return true;
      }
    }
    return false;
  };

  /* функция фильтрации по удобствам жилья */
  var filterFeatures = function (data) {
    for (var i = 0; i < featuresInput.length; i++) {
      if (featuresInput[i].checked && !searchElement(data.offer.features, featuresInput[i].value)) {
        return false;
      }
    }
    return true;
  };

  /* массив с фильтрами */
  var allFilter = [
    filterTypeHouse,
    filterRoomNumber,
    filterHousePrice,
    filterGuestsNumber,
    filterFeatures
  ];

  /* функция фильтрации массива, формирование одного массива */
  var filter = function (data) {
    return data.filter(function (item) {
      for (var i = 0; i < allFilter.length; i++) {
        var filterItem = allFilter[i];
        if (filterItem(item) === false) {
          return false;
        }
      }
      return true;
    });
  };

  /* отрисовка pin по событию в контейнере фильтров */
  tokyoFilters.addEventListener('change', function () {
    debounce(function () {
      window.pin.tokyoPins.innerHTML = '';
      window.pin.updatePins(filter(window.data));
    });
  });
})();


