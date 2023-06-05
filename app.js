// Define Morse code mapping
const morseCodeMap = {
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
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    "\"": ".-..-.",
    "$": "...-..-",
    "@": ".--.-.",
    " ": "/"
  };
  
  function convertToMorse() {
    const inputText = document.getElementById("inputText").value.toUpperCase();
    const result = document.getElementById("result");
    let morseCode = "";
  
    for (let i = 0; i < inputText.length; i++) {
      const char = inputText.charAt(i);
      if (morseCodeMap.hasOwnProperty(char)) {
        morseCode += morseCodeMap[char] + " ";
      }
    }
  
    result.textContent = morseCode;
  }
  
  function convertToText() {
    const inputMorseCode = document.getElementById("inputText").value;
    const result = document.getElementById("result");
    let text = "";
  
    const morseCodeReverseMap = Object.entries(morseCodeMap).reduce((acc, [key, value]) => {
      acc[value] = key;
      return acc;
    }, {});
  
    const morseCodeArr = inputMorseCode.split(" ");
    for (let i = 0; i < morseCodeArr.length; i++) {
      const morse = morseCodeArr[i];
      if (morseCodeReverseMap.hasOwnProperty(morse)) {
        text += morseCodeReverseMap[morse];
      }
    }
  
    result.textContent = text;
  }
  