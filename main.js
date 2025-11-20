function capitalize(str) {
  let firstLetter = str.slice(0, 1).toUpperCase();
  return (firstLetter += str.slice(1));
}

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

function caesarCipher(str, shift) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const result = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const lowerChar = char.toLowerCase();

    const index = alphabets.indexOf(lowerChar);

    if (index === -1) {
      result.push(char);
      continue;
    }

    let newIndex = (index + shift) % 26;
    if (newIndex < 0) newIndex += 26;

    let newChar = alphabets[newIndex];

    if (char === char.toUpperCase()) {
      newChar = newChar.toUpperCase();
    }

    result.push(newChar);
  }

  return result.join("");
}

function analyzeArray(arr) {
  if (!arr || arr.length === 0) {
    throw new Error("Elements must be a number! and not empty array");
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let length = arr.length;
  let average = arr.reduce((sum, num) => sum + num ,0) / length ;

  return { average, min, max, length };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};