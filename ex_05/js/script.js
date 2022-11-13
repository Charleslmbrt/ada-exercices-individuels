let numberArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// ----------------------------- Etape 1  ----------------------------

const sum1 = (arrayToSum) => {
  let sumNumber = 0;
  for (let i = 0; i < arrayToSum.length; i++) {
    sumNumber += arrayToSum[i];
  }
  return sumNumber;
};

console.log(sum1(numberArray));

// ----------------------------- Etape 2 -----------------------------

const sum2 = (arrayToSum) => {
  if (arrayToSum.length === 1) {
    return arrayToSum[0];
  } else {
    return arrayToSum[0] + sum2(arrayToSum.slice(1));
  }
};
console.log(sum2(numberArray));

// 2 + 3   [3, 4, 5, 6, 7, 8, 9, 10]
// 5 + 4   [4, 5, 6, 7, 8, 9, 10]
// 9 + 5   [5, 6, 7, 8, 9, 10]
// 14 + 6  [6, 7, 8, 9, 10]
// 20 + 7  [7, 8, 9, 10]
// 27 + 8  [8, 9, 10]
// 35 + 9  [9, 10]
// 44 + 10  [10]
// 54 []

// ----------------------------- Etape 3 ------------------------------

const factorial = (integer) => {
  if (integer === 0) {
    return 1;
  }
  return integer * factorial(integer - 1);
};
console.log("etape 3", factorial(6));

// 6*5 30
// 30*4 120
// 120*3 360
// 360*2 720
// 720*1 720
// 720*1 720

// ----------------------------- Etape 4 ------------------------------

const fibonacci = (integer) => {
  if (integer <= 1) {
    return 1;
  }
  return fibonacci(integer - 1) + fibonacci(integer - 2);
};

console.log("<etape 4", fibonacci(8));

// 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34
