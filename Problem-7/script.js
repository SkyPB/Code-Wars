/* Write a function named minutesToSeconds that takes a number representing minutes and returns the equivalent number of seconds. For example, minutesToSeconds(5) should return 300. */
let seconds;

const minutesToSeconds = function (minutes) {
  seconds = minutes * 60;
  return `${minutes} minutes is equal to ${seconds} seconds.`;
};

console.log(minutesToSeconds(5));
console.log(minutesToSeconds(1));
console.log(minutesToSeconds(8));
console.log(minutesToSeconds(0.5));
