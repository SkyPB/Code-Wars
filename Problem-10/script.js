/* Calculate the sum of numbers within an array
You can create your own array of numbers but consider trying this problem with a few different sets to verify your solution. Have one array with negative and positive numbers and another with integers and decimals.

You could also try using arrays of different lengths. If you’re feeling comfortable with this, try the slightly more challenging bonus challenge below.

Bonus intermediate challenge: Create a function that can return the sum of a particular column or row number in a table.*/

const arr1 = [3, 4, 10, 20, 18];
const arr2 = [2, 8, -3, 10, -5, 3];
const arr3 = [0.5, 0.3, 0.25, -3, 5, 23];

const getSum = function (arr) {
  return arr.reduce((total, arr) => total + arr);
};

console.log(getSum(arr2));
