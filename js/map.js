/**
 * Created by Yura on 31.03.17.
 */

'use strict';
(function () {
  var mainPin = window.pin.tokyoPins.querySelector('.pin__main');
  var address = window.form.noticeForm.querySelector('#address');

  mainPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    address.setAttribute('value', 'X: ' + startCoords.x + ', Y: ' + startCoords.y);

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      address.setAttribute('value', 'X: ' + startCoords.x + ', Y: ' + startCoords.y);

      mainPin.style.top = (mainPin.offsetTop - shift.y) + 'px';
      mainPin.style.left = (mainPin.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      var endCoords = {
        x: upEvt.clientX,
        y: upEvt.clientY
      };

      address.setAttribute('value', 'X: ' + endCoords.x + ', Y: ' + endCoords.y);

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  /* ввод координат в интуп адресной строки */
  var submitPress = window.form.noticeForm.querySelector('.form__submit');
  var quantity = window.form.noticeForm.querySelector('#address').value;

  /* оброботчик нажатия на кнопку отправить */
  var onFormSubmitPress = function () {
    quantity = window.form.noticeForm.querySelector('#address').value;

    /* введенные координаты записываются в массив и передаются pin */
    var newCoords = (quantity).split(' ');
    mainPin.style.top = (+100 + +newCoords[0]) + 'px';
    mainPin.style.left = (+300 + +newCoords[1]) + 'px';

    /* отображение положения pin после введения координат в инпут */
    address.setAttribute('value', 'X: ' + newCoords[1] + ', Y: ' + newCoords[0]);
  };

  submitPress.addEventListener('click', onFormSubmitPress);

  /* сброс формы, чтобы после ввода координат в инпут он очищался и отображались кординаты pin  */
  window.form.noticeForm.addEventListener('submit', function () {
    window.form.noticeForm.reset();
  });
})();
