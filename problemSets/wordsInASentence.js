// Function: Counts words in a sentence

function countWords(text) {
  if (text === "") {
    return 0;
  } else {
    let splitText = text.split(" ");
    return splitText.length;
  }
}

console.log(countWords("This is an example string")); // 5
console.log(countWords("Hello")); // 1
console.log(countWords("")); // 0
