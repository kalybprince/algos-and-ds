/* 

Function: countVowels(text)

    Description: Use a for loop to count and return the number of 
    vowels (a, e, i, o, u, case-insensitive) in the given text
    string.
    Hint: You can treat the string like an array of characters.
    You might need to convert the character to lowercase for comparison.
    Example: countVowels("Hello World") should return 3.

*/

function countVowels(text) {
  let vowelCount = 0;
  const vowels = "aeiou";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const lowerChar = char.toLowerCase();
    if (vowels.includes(lowerChar)) {
      vowelCount++;
    }
  }
  return vowelCount;
}

console.log(countVowels("Hello World"));
