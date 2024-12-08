/*  Return the number of vowels in a string
Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of. If you feel like an extra challenge, consider returning the number of characters. */

let counter = 0;
const vowels = ["a", "e", "i", "o", "u"];
const hasVowels = function (str) {
  for (i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      counter++;
    }
  }
  return counter;
};
console.log(hasVowels("Boolean"), "<<<<< Counter");
// Another way
let sum = 0;
function countVowel(str) {
  const newArr = str.split("");
  for (let i = 0; i < newArr.length; i++) {
    if (
      newArr[i] === "a" ||
      newArr[i] === "e" ||
      newArr[i] === "i" ||
      newArr[i] === "o" ||
      newArr[i] === "u"
    ) {
      sum++;
    }
  }
  return sum;
}
console.log(countVowel("Hello"), "vowels");
