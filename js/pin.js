/**
 * Created by Yura on 12.04.17.
 */
'use strict';

window.pin = (function () {

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
    div.setAttribute('style', 'left:' + (getX + (sizeIconPin.width / 2)) + 'px; top:' + (getY + sizeIconPin.height) + 'px;');
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

  /* отрисовка pin в фрагмент */
  var tokyoPins = document.querySelector('.tokyo__pin-map');
  var fragment = document.createDocumentFragment();
  (function () {

    for (var i = 0; i < 8; i++) {
      var pin = generatePin(i);
      fragment.appendChild(pin);
    }

    tokyoPins.appendChild(fragment);
    return tokyoPins;
  })();

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
  var pins = tokyoPins.querySelectorAll('.pin');
  changeActivePins(pins[0]);
  for (var i = 0; i <= 8; i++) {

    pins[i].addEventListener('click', function (evt) {
      changeActivePins(evt.currentTarget);
      window.card.openDialog(evt);
    });

    pins[i].addEventListener('keydown', function (evt) {
      if (evt.keyCode === 13) {
        changeActivePins(evt.currentTarget);
        window.card.openDialog(evt);
      }
    });
  }

  return {
    delActivePin: delActivePin
  };

})();
