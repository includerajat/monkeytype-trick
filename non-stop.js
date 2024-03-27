// Focusing the typing area
document.getElementById("wordsWrapper")?.click();

// Maximum words which it can type automatically, because if you won't set the limit then it will type the words infinitely
// and cause the browser to crash or hang
const MAX_COUNT = 10;

// User needs to enter the space button only one time for the automatic typing to start
document.addEventListener("keypress", (e) => {
  console.log(e);
  if (e.key == " ") {
    endlessTyping();
  }
});

let count = 0;

const endlessTyping = () => {
  if (count > MAX_COUNT) return;
  count++;
  const ele = document.querySelector(".word.active");
  if (ele) {
    const content = ele.textContent;
    typeActiveWord(content);
    document.execCommand("insertText", false, " ");
    endlessTyping();
  }
};

// It will type the active word programmatically
const typeActiveWord = (word, i = 0) => {
  const length = word.length;
  if (i == length) return;
  document.execCommand("insertText", false, word[i]);
  typeActiveWord(word, i + 1);
};
