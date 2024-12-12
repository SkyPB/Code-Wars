function vowelRemover(str) {
  vowelLess = str.split("");
  for (i = 0; i < vowelLess.length; i++) {
    if (vowelLess[i] === "a" || vowelLess[i] === "o") {
      vowelLess.splice(i, 1);
    }
  }
  return vowelLess.join("");
}

console.log(vowelRemover("aeolalo")); // Hell
