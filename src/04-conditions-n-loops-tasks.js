function getFizzBuzz(num) {
  if (num % 15 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}

function getFactorial(n) {
  return n === 0 ? 1
    : [...Array(n).keys()]
      .map((i) => i + 1)
      .reduce((acc, val) => acc * val, 1);
}

function getSumBetweenNumbers(n1, n2) {
  const start = Math.min(n1, n2);
  const end = Math.max(n1, n2);
  return Array.from({ length: end - start + 1 }, (_, i) => i + start)
    .reduce((sum, num) => sum + num, 0);
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function doRectanglesOverlap(rect1, rect2) {
  return !(
    rect1.left > rect2.left + rect2.width
    || rect1.left + rect1.width < rect2.left
    || rect1.top > rect2.top + rect2.height
    || rect1.top + rect1.height < rect2.top
  );
}

function isInsideCircle(circle, point) {
  const dx = point.x - circle.center.x;
  const dy = point.y - circle.center.y;
  return dx * dx + dy * dy < circle.radius * circle.radius;
}

function findFirstSingleChar(str) {
  const charCount = str.replace(/ /g, '')
    .split('')
    .reduce((acc, char) => {
      const newAcc = { ...acc }; // Create a new object
      newAcc[char] = (newAcc[char] || 0) + 1;
      return newAcc;
    }, {});

  return str.split('').find((char) => charCount[char] === 1) || null;
}


function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const [start, end] = [Math.min(a, b), Math.max(a, b)];
  return `${isStartIncluded ? '[' : '('}${start}, ${end}${isEndIncluded ? ']' : ')'}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseInteger(num) {
  return parseInt(num.toString().split('').reverse().join(''), 10);
}

function isCreditCardNumber(ccn) {
  const digits = ccn.toString().split('').map(Number);
  const checksum = digits
    .reverse()
    .map((digit, index) => (index % 2 === 0 ? digit : digit * 2))
    .map((digit) => (digit > 9 ? digit - 9 : digit))
    .reduce((acc, curr) => acc + curr, 0);
  return checksum % 10 === 0;
}

function getDigitalRoot(n) {
  let sum = n;
  while (sum > 9) {
    sum = sum.toString().split('')
      .map(Number)
      .reduce((a, b) => a + b, 0);
  }
  return sum;
}

function isBracketsBalanced(/* str */) {
  // const stack = [];
  // const matchingBrackets = {
  //   ']': '[', ')': '(', '}': '{', '>': '<',
  // };
  // for (let i = 0; i < str.length; i + 1) {
  //   const char = str[i];
  //   if ('[({<'.includes(char)) stack.push(char);
  //   else if (']})>'.includes(char) && stack.pop() !== matchingBrackets[char]) return false;
  // }
  // return stack.length === 0;
  throw new Error('Not implemented');
}

function toNaryString(num, n) {
  return num.toString(n);
}

function getCommonDirectoryPath(/* paths */) {
  // const splitPaths = paths.map((p) => p.split('/'));
  // let commonLength = splitPaths[0].length;

  // for (let i = 0; i < commonLength; i + 1) {
  //   if (!splitPaths.every((path) => path[i] === splitPaths[0][i])) {
  //     commonLength = i;
  //     break;
  //   }
  // }

  // return splitPaths[0].slice(0, commonLength).join('/') + (commonLength > 0 ? '/' : '');
  throw new Error('Not implemented');
}

function getMatrixProduct(/* m1, m2 */) {
  // return m1.map((row) => m2[0].map((_, colIndex) => row.reduce(
  //   (sum, val, rowIndex) => sum + val * m2[rowIndex][colIndex],
  //   0,
  // )));
  throw new Error('Not implemented');
}


function evaluateTicTacToePosition(/* position */) {
  throw new Error('Not implemented');
  // const lines = [
  //   ...position,
  //   position[0].map((_, i) => position.map((row) => row[i])),
  //   [position[0][0], position[1][1], position[2][2]],
  //   [position[0][2], position[1][1], position[2][0]],
  // ];
  // return lines.reduce((winner, line) => {
  //   if (line.every((cell) => cell === 'X')) return 'X';
  //   if (line.every((cell) => cell === '0')) return '0';
  //   return winner;
  // }, undefined);
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
