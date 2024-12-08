/* The function should return an array of names who scored over 80 */
const students = [
  { name: "Alice", score: 75 },
  { name: "Bob", score: 92 },
  { name: "Cierra", score: 89 },
  { name: "Sky", score: 62 },
];

const newArr = [];
const goodGrade = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].score > 80) {
      newArr.push(arr[i].name);
    }
  }
  return newArr;
};
console.log(goodGrade(students));
