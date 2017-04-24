/**
 * Created by Yura on 12.04.17.
 */
'use strict';

(function () {

  var updatePins = function (items) {
    window.pin.renderPin(items);
  };

  var onSuccess = function (data) {
    window.data = data;
    window.card.offerDialog.replaceChild(window.card.dialogBlock(0), window.card.offerDialog.querySelector('.dialog__panel'));
    updatePins(window.data);
  };

  var URL = 'https://intensive-javascript-server-kjgvxfepjl.now.sh/keksobooking/data';
  window.load(URL, onSuccess);


  var tokyoFilters = document.querySelector('.tokyo__filters');
  var housingType = tokyoFilters.querySelector('#housing_type');

  housingType.addEventListener('change', function () {
    window.pin.tokyoPins.innerHTML = '';
    updatePins(window.filter(window.data));
  });
})();


