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
  var generatePin = function (item, i) {

    var getX = item.location.x;
    var getY = item.location.y;
    var div = document.createElement('div');
    div.className = 'pin';
    div.setAttribute('style', 'left:' + (getX - (sizeIconPin.width / 2)) + 'px; top:' + (getY - sizeIconPin.height) + 'px;');
    div.setAttribute('data-index', i);

    var img = document.createElement('img');
    img.className = 'rounded';
    img.height = '40';
    img.width = '40';
    img.setAttribute('src', item.author.avatar);
    img.setAttribute('tabindex', '0');
    div.appendChild(img);

    return div;
  };

  /* отрисовка pin на карту */
  var renderPin = function (data) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < data.length; i++) {
      fragment.appendChild(generatePin(data[i], i));
    }
    tokyoPins.appendChild(fragment);
    connectionPin(data);
  };

  /* функция вызова обновления pin на карте */
  var updatePins = function (data) {
    renderPin(data);
  };

  /* перестановка pin--active */
  var changeActivePins = function (item) {
    delActivePin();
    if (window.pins.length > 0) {
      item.classList.add('pin--active');
    }
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
    window.pins = document.querySelectorAll('.pin:not(.pin__main)');
    changeActivePins(window.pins[0]);

    for (var i = 0; i < arr.length; i++) {

      window.pins[i].addEventListener('click', function (evt) {
        changeActivePins(evt.currentTarget);
        window.showCard(evt, arr);
      });

      window.pins[i].addEventListener('keydown', function (evt) {
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
    renderPin: renderPin,
    updatePins: updatePins,
    tokyoPins: tokyoPins
  };

})();
