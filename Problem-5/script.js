/* Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3] */

const removeDuplicates = function (arr) {
  const seen = new Set();
  const result = [];

  // Iterate from right to left
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i]); // Mark number as seen
      result.unshift(arr[i]); // Add to the front of the result array
    }
  }
  return result;
};
console.log(removeDuplicates([3, 4, 4, 3, 6, 3]));
