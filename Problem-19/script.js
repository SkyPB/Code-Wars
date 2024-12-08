/* Create a function that takes in a camelCasing and separates the words at the uppercase letter by adding a space.*/
const camelCase = function (str) {
  const newArr = str.split("");
  let result = "";
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === str[i].toUpperCase() && i !== 0) {
      result += " ";
    }
    result += newArr[i];
  }
  return result;
};
// console.log(camelCase("camelCaseTesting"));
