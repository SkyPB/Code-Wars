/* Create a function to return sum of only positive numbers in an array */

const arr4 = [-5, -6, 8, 7];

// const positiveSum = function (arr) {
//   const filterArr = arr.filter((num) => num > 0);
//   return filterArr.reduce((total, arr) => total + arr);
// };

// console.log(getSum(arr4), "negative filter");

let sum = 0;
const positiveSum = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    }
  }
  return sum;
};

console.log(positiveSum(arr4));
