/**
 * Created by Yura on 12.04.17.
 */
'use strict';

(function () {

  /* поиск формы в документе */
  var noticeForm = document.querySelector('.notice__form');

  /* зависимость стоимости жилья */
  var typePrice = {
    flat: 1000,
    badHouse: 0,
    place: 10000
  };

  /* зависимость стоимости от типа жилья */
  var type = noticeForm.querySelector('#type');
  var price = noticeForm.querySelector('#price');
  type.addEventListener('change', function () {
    var selectedOptions = type.options[type.selectedIndex].value;
    var value = typePrice[selectedOptions];
    price.setAttribute('min', value);
    price.value = value;
  });

  var roomsGuests = {
    oneRoom: 'noGuests',
    twoRoom: 'guests',
    manyRoom: 'guests'
  };

  /* зависимость кол-ва гостей от комнат */
  var roomNumber = noticeForm.querySelector('#room_number');
  var capacity = noticeForm.querySelector('#capacity');
  roomNumber.addEventListener('change', function () {
    var selectedOptions = roomNumber.options[roomNumber.selectedIndex].value;
    var value = roomsGuests[selectedOptions];
    capacity.value = value;
  });

  /* зависимость времени выезда от времени вселения */
  var time = noticeForm.querySelector('#time');
  var timeout = noticeForm.querySelector('#timeout');
  time.addEventListener('change', function () {
    var selectedOptions = time.options[time.selectedIndex].value;
    timeout.value = selectedOptions;
  });

})();
