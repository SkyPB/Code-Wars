/* Create a function that finds the maximum number in an array
In this challenge, you’ll write a function that takes an array of numbers as an input and returns the largest number in that array. Test your function with various arrays, including arrays with negative numbers, decimals, and all positive integers. */

const numberArr = [5, 7, 5, 8, -6, -2, 1, 13];
const getMax = function (arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[0];
};
console.log(getMax(numberArr));
