function twoFiveCount (value, factCount, twoFiveObject) {
  var number;
  if (factCount == "!") {
    for (var i = 1; i <= value; i++) {
      if (i % 5 == 0) {
        number = i;
        while (number % 5 == 0) {
          twoFiveObject.fiveCount++;
          number = number / 5;
        }
        if (number % 2 == 0) {
          while (number % 2 == 0) {
            twoFiveObject.twoCount++;
            number = number / 2;
          }
        }
      }
      else if (i % 2 == 0) {
        number = i;
        while (number % 2 == 0) {
          twoFiveObject.twoCount++;
          number = number / 2;
        }
      }
    }
    return twoFiveObject;
  }
  else {
    if (value % 2 == 0) {
      for (var i = 2; i <= value; i = i + 2) {
        if (i % 5 == 0) {
            number = i;
            while (number % 5 == 0) {
              twoFiveObject.fiveCount++;
              number = number / 5;
            }
            if (number % 2 == 0) {
              while (number % 2 == 0) {
                twoFiveObject.twoCount++;
                number = number / 2;
              }
            }
        }
        else if (i % 2 == 0) {
          number = i;
          while (number % 2 == 0) {
            twoFiveObject.twoCount++;
            number = number / 2;
          }
        }
      }
      return twoFiveObject;
    }
    else {
      for (var i = 1; i <= value; i = i + 2) {
        if (i % 5 == 0) {
            number = i;
            while (number % 5 == 0) {
              twoFiveObject.fiveCount++;
              number = number / 5;
            }
        }
      }
      return twoFiveObject;
    }
  }
}

module.exports = function zeros(expression) {
  // your solution
  var array = expression.split('*');
  var twoFiveObject = {fiveCount: 0, twoCount: 0}
  for (var i = 0; i < array.length; i++) {
    var value = "", factCount = ""; 
    for (var j = 0; j < array[i].length; j++) {
      if (!isNaN(parseInt(array[i][j]))) {
        value += array[i][j];
      }
      else {
        factCount += array[i][j];
      }
    }
    twoFiveObject = twoFiveCount(value, factCount, twoFiveObject);
  }
  return Math.min(twoFiveObject.fiveCount, twoFiveObject.twoCount);
}
