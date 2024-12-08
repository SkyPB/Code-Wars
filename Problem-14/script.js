/* Create a function that filters out negative numbers
In this challenge, you’ll have a function that takes an array as an input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.” */

const arr5 = [-1, 2, 8, -20, 0, -6];
const removeNegatives = function (arr) {
  const filter = arr.filter((num) => num >= 0);
  return filter;
};

console.log(removeNegatives(arr5), "removing negatives");
