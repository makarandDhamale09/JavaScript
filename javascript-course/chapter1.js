//This creates a alert window. But this works with browser only
//alert("This is alert message!!!");

/**
 * returns the result of base to exponent
 * @param {*} base base number
 * @param {*} exponent exponent number
 * @returns Number
 */
var power = function (base, exponent) {
  result = 1;
  for (var count = 0; count < exponent; count++) {
    result *= base;
  }

  return result;
};

console.log(power(2, 10));

/**
 * creates a landscape with mountains and flats
 * @returns landscape
 */
var landscape = function () {
  var result = "";

  var flat = function (size) {
    for (var count = 0; count < size; count++) {
      result += "_";
    }
  };

  var mountain = function (size) {
    result += "/";
    for (var count = 0; count < size; count++) {
      result += "'";
    }
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(5);
  mountain(1);
  flat(2);
  return result;
};

console.log(landscape());
