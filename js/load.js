/**
 * Created by Yura on 16.04.17.
 */

'use strict';

(function () {
  window.load = function (url, onSuccess) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
        window.pin();
      }
    });

    xhr.open('GET', url);
    xhr.send();
  };

})();

