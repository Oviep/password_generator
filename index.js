const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

let passwordLength = 15

function getRandomCharacter() {
  let random = Math.floor(Math.random() * characters.length)
  return characters[random]
}

function getRandomCharacter1() {
  let random1 = Math.floor(Math.random() * characters.length);
  return characters[random1];
}

function generate_password() {
 
  let randomPassword = ""
   let randomPassword1 = "";
 
  for(let i = 0; i < passwordLength; i++) {
    
      randomPassword += getRandomCharacter();
      randomPassword1 += getRandomCharacter1();
    }
            input2.textContent = randomPassword1
    return input1.textContent = randomPassword;
    
  }


