/**
 * Created by Yura on 12.04.17.
 */
'use strict';

window.form = (function () {

  /* поиск формы в документе */
  var noticeForm = document.querySelector('.notice__form');

  var syncValues = function(element, value) {
    element.value = value;
  };

  var syncValueWithMin = function (element, value) {
    element.value = value;
    element.setAttribute('min', value);
  };

  /* зависимость стоимости от типа жилья */
  var type = noticeForm.querySelector('#type');
  var price = noticeForm.querySelector('#price');
  type.addEventListener('change', function () {
    window.synchronizeFields(type, price, ['flat', 'badHouse', 'place'], ['1000', '0', '10000'], syncValueWithMin);
  });

  /* зависимость кол-ва гостей от комнат */
  var roomNumber = noticeForm.querySelector('#room_number');
  var capacity = noticeForm.querySelector('#capacity');
  roomNumber.addEventListener('change', function () {
    window.synchronizeFields(roomNumber, capacity, ['oneRoom', 'twoRoom', 'manyRoom'], ['noGuests', 'guests', 'guests'], syncValues);
  });

  /* зависимость времени выезда от времени вселения */
  var time = noticeForm.querySelector('#time');
  var timeout = noticeForm.querySelector('#timeout');
  time.addEventListener('change', function () {
    window.synchronizeFields(time, timeout, ['12', '13', '14'], ['12', '13', '14'], syncValues);
  });

  return {
    noticeForm: noticeForm
  };

})();
