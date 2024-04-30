var doh = "Doh";

console.log(typeof doh.toLocaleUpperCase); // -> function

console.log(doh.toUpperCase()); // -> DOH

var day1 = {
  squirell: false,
  events: ["work", "touched tree", "pizza"],
};

console.log(day1.squirell); // -> false
console.log(day1.wolf); // -> undefined

day1.wolf = true;

console.log(day1); // -> prints day1 object with wolf
delete day1.wolf;
console.log(day1.wolf); // -> undefined

//reverse this array
var listOfNumbers = [2, 3, 5, 7, 11];

reverse(listOfNumbers);
function reverse(nums) {
  for (let num of nums) {
    console.log(num);
  }
}

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and in- cluding) end.
/**
 *
 * @param {start} start of array
 * @param {end} end of array
 * @param {step} step of array numbers
 * @returns an array with numbers with the step provided
 */
function sum(start, end, step) {
  let listOfNums = [];
  for (let i = start; i <= end; ) {
    listOfNums.push(i);
    i = i + step;
  }
  return listOfNums;
}

console.log(sum(2, 10, 2));
