/**
 * Created by Yura on 24.04.17.
 */

'use strict';

(function () {
  var filterContainer = document.querySelector('.tokyo__filters-container');
  var typeHouse = filterContainer.querySelector('#housing_type');

  var filterTypeHouse = function (data) {
    if (typeHouse.value === 'flat') {
      return data.offer.type === 'flat';
    } else if (typeHouse.value === 'house') {
      return data.offer.type === 'house';
    } else if (typeHouse.value === 'bungalo') {
      return data.offer.type === 'bungalo';
    } else {
      return true;
    }
  };

  window.filter = function (arr) {
    return arr.filter(filterTypeHouse);
  };
})();


