/**
 * Created by Yura on 12.04.17.
 */

'use strict';

window.synchronizeFields = function (fieldOne, FieldTwo, valueOne, valueTwo, callback) {
  for (var i = 0; i < valueOne.length; i++) {
    if (fieldOne.value === valueOne[i]) {
      callback(FieldTwo, valueTwo[i]);
    }
  }
};
