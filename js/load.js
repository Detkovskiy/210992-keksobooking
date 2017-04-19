/**
 * Created by Yura on 16.04.17.
 */

'use strict';

(function () {
  window.load = function (url, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    /* формирование сообщения об ошибке */
    var renderErrorMessage = function () {
      switch (xhr.status) {
        case 400:
          return 'Неверный запрос!';
        case 401:
          return 'Пользователь не авторизован!';
        case 404:
          return 'Данные не найдены!';
        default:
          return 'Неизвестная ошибка!';
      }
    };

    /* поиск шаблона блока ошибки */
    var errorTemplate = document.getElementById('error-template').content;
    var body = document.body;

    /* заполнение шаблона и вывод на экран */
    var errorLoad = function () {
      var error = errorTemplate.cloneNode(true);

      error.querySelector('.error__number').textContent = xhr.status;
      error.querySelector('.error__message').textContent = renderErrorMessage();
      body.appendChild(error);

      /* оброботчик события закрытия окна с ошибкой */
      var closeErrorBlock = document.querySelector('.error__close');
      var errorBlock = document.querySelector('.error__block');

      var onPresCloseErrorBlock = function (evt) {
        evt.preventDefault();
        errorBlock.classList.add('hidden');

        closeErrorBlock.removeEventListener('click', onPresCloseErrorBlock);
        closeErrorBlock.removeEventListener('click', onEscPres);
      };

      var onEscPres = function (evt) {
        if (evt.keyCode === 27) {
          errorBlock.classList.add('hidden');
          closeErrorBlock.removeEventListener('click', onPresCloseErrorBlock);
        }
      };

      document.addEventListener('keydown', onEscPres);
      closeErrorBlock.addEventListener('click', onPresCloseErrorBlock);
    };

    /* временная функция, убирает блок с объявлением, если есть ошибки */
    var temporarily = function () {
      window.card.offerDialog.classList.add('hidden');
    };

    /* загрузка и отрисовка пинов и объявления */
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);

        (function () {
          var fragment = document.createDocumentFragment();

          for (var i = 0; i < window.data.length; i++) {
            var pin = window.pin.generatePin(i);
            fragment.appendChild(pin);
          }

          window.pin.tokyoPins.appendChild(fragment);
          return window.pin.tokyoPins;
        })();

        window.pin.connectionPin(window.data);
      } else {
        temporarily();
        errorLoad();
      }
    });

    xhr.open('GET', url);
    xhr.send();
  };

})();

