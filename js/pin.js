/**
 * Created by Yura on 12.04.17.
 */
'use strict';

window.pin = (function () {
  var tokyoPins = document.querySelector('.tokyo__pin-map');

  /* зазмеры иконки Pin */
  var sizeIconPin = {
    width: 56,
    height: 75
  };

  /* формирование pin */
  var generatePin = function (i) {

    var getX = window.data[i].location.x;
    var getY = window.data[i].location.y;
    var div = document.createElement('div');
    div.className = 'pin';
    div.setAttribute('style', 'left:' + (getX - (sizeIconPin.width / 2)) + 'px; top:' + (getY - sizeIconPin.height) + 'px;');
    div.setAttribute('data-index', i);

    var img = document.createElement('img');
    img.className = 'rounded';
    img.height = '40';
    img.width = '40';
    img.setAttribute('src', window.data[i].author.avatar);
    img.setAttribute('tabindex', '0');
    div.appendChild(img);

    return div;
  };

  /* перестановка pin--active */
  var changeActivePins = function (item) {
    delActivePin();
    item.classList.add('pin--active');
  };

  /* удаление класса pin--active (используется при закрытии объявления) */
  var delActivePin = function () {
    var pinActive = tokyoPins.querySelector('.pin--active');
    if (pinActive !== null) {
      pinActive.classList.remove('pin--active');
    }
  };

  /* отслеживание нажатия на pin
   * перестановка класса Active на нажатый pin
   * открытие объявления по индексу pin */
  var connectionPin = function (arr) {
    var pins = tokyoPins.querySelectorAll('.pin');
    changeActivePins(pins[0]);

    for (var i = 1; i <= arr.length; i++) {

      pins[i].addEventListener('click', function (evt) {
        changeActivePins(evt.currentTarget);
        window.showCard(evt);
      });

      pins[i].addEventListener('keydown', function (evt) {
        if (evt.keyCode === 13) {
          changeActivePins(evt.currentTarget);
          window.showCard(evt);
        }
      });
    }
  };

  return {
    delActivePin: delActivePin,
    generatePin: generatePin,
    connectionPin: connectionPin,
    tokyoPins: tokyoPins
  };

})();
