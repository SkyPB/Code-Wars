/* Given a sentence, reverse each word
1. Create function that takes a string 
2. Split the string into words
3. Reverse the words
4. Join them back together
*/

const reverseWords = function (str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
};
console.log(reverseWords("Hello my name is Sky"));
