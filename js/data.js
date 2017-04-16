/**
 * Created by Yura on 12.04.17.
 */

'use strict';

/* запись в глобальную область массива с объявлениями */
window.data = (function () {

  var objects = [];
  var onSuccess = function (data) {

    console.log(data);
    for (var i = 0; i < data.length; i++) {
      objects.push(data[i]);
    }

    return objects;
  };

  var URL = 'https://intensive-javascript-server-kjgvxfepjl.now.sh/keksobooking/data';
  window.load(URL, onSuccess);

  return objects;
})();
