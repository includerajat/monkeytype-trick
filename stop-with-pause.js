// Focusing the typing area
document.getElementById("wordsWrapper")?.click();

const DELAY = 100;

// User needs to enter the space button for the automatic typing to start
// And also user needs to type the space button again when the last active word typed completely
document.addEventListener("keyup", (e) => {
  if (e.key == " ") {
    const ele = document.querySelector(".word.active");
    if (ele) {
      const content = ele.textContent;
      typeActiveWord(content);
    }
  }
});

// It will pause the execution for the given time
const pause = async (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

// It will type the active word programmatically with some delay
const typeActiveWord = async (word, i = 0) => {
  const length = word.length;
  if (i == length) return;
  const randomNumber = Math.floor(Math.random() * DELAY);
  await pause(randomNumber);
  document.execCommand("insertText", false, word[i]);
  await typeActiveWord(word, i + 1);
};
