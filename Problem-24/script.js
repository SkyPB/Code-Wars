/* Remove vowels from string */

function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

console.log(disemvowel("This cohort is amazing!"));

const vowels = ["a", "e", "i", "o", "u"];
vowels.forEach((vowel) => console.log(vowel));
