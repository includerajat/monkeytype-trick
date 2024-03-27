// Focusing the typing area
document.getElementById("wordsWrapper")?.click();

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

// It will type the active word programmatically
const typeActiveWord = (word, i = 0) => {
  const length = word.length;
  if (i == length) return;
  document.execCommand("insertText", false, word[i]);
  typeActiveWord(word, i + 1);
};
