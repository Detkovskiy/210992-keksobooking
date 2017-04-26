/**
 * Created by Yura on 12.04.17.
 */
'use strict';

(function () {

  var onSuccess = function (data) {
    window.data = data;
    window.card.offerDialog.replaceChild(window.card.dialogBlock(data, 0), window.card.offerDialog.querySelector('.dialog__panel'));
    window.pin.updatePins(window.data);
  };

  var URL = 'https://intensive-javascript-server-kjgvxfepjl.now.sh/keksobooking/data';
  window.load(URL, onSuccess);

})();


