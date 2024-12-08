/* Sort an array from lowest to highest
You could create a function for this solution as well, but be sure to try your program with varying lengths and types of arrays. Try one with all integers, another with negative numbers, and another with decimals.*/

const negative = [-1, -5, 0, -8, -29, -2];
const integers = [2, 200, 59, 8000, 33];
const decimals = [0.33, 0.89, 0.56, 0.1, 0.809];

const sortArr = function (arr) {
  return arr.sort((a, b) => a - b);
};
console.log(sortArr(negative));
console.log(sortArr(integers));
console.log(sortArr(decimals));
