/* Write a function named checkNumberSign that takes a number as a parameter and returns:
	•	"positive" if the number is greater than zero
	•	"negative" if the number is less than zero
	•	"zero" if the number is zero
For example, checkNumberSign(-5) should return "negative"
*/

const checkNumberSign = function (num) {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
};
console.log(checkNumberSign(-5));
console.log(checkNumberSign(0));
console.log(checkNumberSign(20));
