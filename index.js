function sum(a, b) {
  return a + b;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function findLargest(numbers) {
  if (numbers.length === 0) return null;
  return Math.max(...numbers);
}

function isPalindrome(str) {
  const lower = str.toLowerCase();
  return lower === lower.split('').reverse().join('');
}

function filterEvenNumbers(numbers) {
  return numbers.filter(n => n % 2 === 0);
}

// Do not edit the line below.
module.exports = {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
};
