/**
 * Created by Yura on 14.04.17.
 */

'use strict';




  window.load = function (URL, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
//debugger
    xhr.open('GET', URL);

    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
    });

    xhr.send();
  };

var aURL = 'https://intensive-javascript-server-kjgvxfepjl.now.sh/keksobooking/data';

var ss = 0;
var onload = function (data) {
  ss = data;
  console.log(data);
  console.log(ss);


  return ss;
};


(function () {
  window.load(aURL, onload);
})();


