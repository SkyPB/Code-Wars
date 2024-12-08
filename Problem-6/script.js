/* Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.
Examples:
[1, 3, 1] ==> 13
[5, 7, 5, 9, 7] ==> 579
[1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679 */

const smallestNumber = function (digits) {
  // Remove duplicates by converting to a Set and back to an array
  const uniqueDigits = [...new Set(digits)];

  // Sort the unique digits in ascending order
  uniqueDigits.sort((a, b) => a - b);

  // Join the sorted digits into a single number
  return parseInt(uniqueDigits.join(""), 10); // Base 10 (0-9)
};

console.log(smallestNumber([5, 7, 5, 9, 7]));
