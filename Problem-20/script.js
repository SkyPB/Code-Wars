/* Create a function that takes an array of numbers and returns the median 
1. Create a function
2. Determine what a median is
3. Decide parameter(s) -- array of numbers
4. Put array in ascending order (sort array; a->b)
5. Return middle number
6. If/Else statement for even/odd arrays
7. Check
*/

const getMedian = function (arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const mid = Math.floor(sortedArr.length / 2);
  if (sortedArr.length % 2 !== 0) {
    // return middle number
    return sortedArr[mid];
  } else {
    // return average of middle 2 numbers
    return sortedArr[mid - 1] + sortedArr[mid] / 2;
  }
};
