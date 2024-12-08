let numArray = [0, 1, 1];

const trib = function (n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  let solution = 0;

  for (let i = 3; i <= n; i++) {
    const result = numArray[i - 3] + numArray[i - 2] + numArray[i - 1];
    numArray.push(result);
    solution = result;
    console.log(numArray);
    console.log(solution, "iteration");
  }
  return solution;
};

console.log(trib(3));
console.log(trib(4));
