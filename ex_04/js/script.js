const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

latinToMorse[" "] = " / ";

// --------------------TRANSLATE LATIN TO MORSE--------------------

const getLatinCharacterList = (lCharacter) => {
  return lCharacter.toUpperCase().split("");
};

const translateLatinCharacter = (latinCharacter) => {
  return latinToMorse[latinCharacter];
};

const encode = (text) => {
  let testArray = [];

  const latinArray = getLatinCharacterList(text);

  latinArray.map((characterLatin) => {
    testArray.push(translateLatinCharacter(characterLatin));
  });
  return testArray.join(" ");
};

console.log(encode("Je suis"));

// ---------------------------------------------------------------

const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};

morseToLatin["/"] = " ";

// --------------------TRANSLATE MORSE TO LATIN--------------------

function getMorseCharacterList(mCharacter) {
  return mCharacter.split(" ");
}

function translateMorseCharacter(morseCharacter) {
  return morseToLatin[morseCharacter];
}

function decode(text) {
  let morseArray = getMorseCharacterList(text);

  let decodeMorse = "";
  for (let i = 0; i < morseArray.length; i++) {
    decodeMorse += translateMorseCharacter(morseArray[i]);
  }
  return decodeMorse;
}

console.log(decode(".--- . / ... ..- .. ..."));

// ---------------------------------------------------------------
