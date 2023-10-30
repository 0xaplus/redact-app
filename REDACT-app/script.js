const inputedContentEl = document.querySelector("#input-content");
const outputEl = document.querySelector("#output-content");
const wordsToBeScrambled = document.querySelector("#wordsToBeScrambled");
const wordsToScrambleWith = document.querySelector("#replacingWords");
const wordsCount = document.querySelector("#wordLength");
const wordsScrambled = document.querySelector("#wordsScrambled");
const charScrambled = document.querySelector("#charactersScrambled");
const timeSpent = document.querySelector("#timeSpent");
const submitBtn = document.querySelector("#submit");

function scrambleText(displayStat) {
  let replacingChar = wordsToScrambleWith.value;
  let characters = "";
  let input = inputedContentEl.value;
  outputEl.value = "";
  const wordsArray = input.match(/\w+/gi); // Converts the input text to array of words only
  const arrOfWordsToBeScrambled = wordsToBeScrambled.value.match(/\w+/gi);

  arrOfWordsToBeScrambled.forEach((i) => {
    if (!wordsArray.includes(i)) { // Checks whether word to be scrambled is not part of the text content
      alert(`${i} is not part of the text content.`);
      return;
    } else {
      input = input.replaceAll(i, `${replacingChar.length > 1 ? replacingChar : replacingChar.repeat(i.length)}`); // checks whether the replacing char is more than 1
      characters += i.match(/\w+/gi); // Converts the each text to array of characters only
    }
  });

  displayStat(input, wordsArray, arrOfWordsToBeScrambled, characters)
}

function displayStat(input, wordsArray, arrOfWordsToBeScrambled, characters) {
  let scrambledText = "";
  scrambledText = input;
  outputEl.value += scrambledText; // REDACTED (OUTPUT)
  wordsCount.innerText = wordsArray.length; // Words scanned
  wordsScrambled.innerText = arrOfWordsToBeScrambled.length; // Words scrambled
  charScrambled.innerText = characters.length; // Characters scrambled
}

function redactNow() {
  let start = Date.now();
  scrambleText(displayStat);
  let timeTaken = Date.now() - start;
  timeSpent.innerText = timeTaken + 'ms';
}
submitBtn.addEventListener("click", redactNow);