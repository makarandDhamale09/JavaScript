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
console.log("----------");

// Closure
function wrapValues(n) {
  var localVariable = n;
  return function () {
    return localVariable;
  };
}

var wrap1 = wrapValues(1); // here wrap1 is the inner function which returns the localvariable
var wrap2 = wrapValues(2);

console.log(wrap1());
console.log(wrap2());

/**
 * This method returns a method which can me multiplied with the factor with which it was called
 * @param {factor} factor
 * @returns fuction which multiplies the factor with the passed number
 */
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

var twice = multiplier(2); // here twice is a function that is returned which is inner function of multiplier
console.log(twice); // this will print the method as anonymous as it is the inner function
console.log(twice(5));

// Recursion
function power(base, exponent) {
  if (exponent == 0) return 1;
  else return base * power(base, exponent - 1);
}

console.log(`The value of 2 to the power 4 is ${power(2, 4)}`);

/**
 * Consider this puzzle: by starting from the number 1 and
 * repeatedly either adding 5 or multiplying by 3, an
 * infinite amount of new numbers can be produced.
 * How would you write a function that, given a number,
 * tries to find a sequence of such additions and
 * multiplications that produce that number? For example,
 * the number 13 could be reached by first multiplying
 * by 3 and then adding 5 twice, whereas the number 15
 * cannot be reached at all.
 *
 * Below is recursive solution
 */
function findSolution(target) {
  function find(current, history) {
    if (current == target) return history;
    else if (current > target) return null;
    else
      return (
        find(current + 5, "(" + history + " + 5)") ||
        find(current * 3, "(" + history + " * 3)")
      );
  }
  return find(1, "1");
}

console.log(`History of solution is ${findSolution(24)}`);
