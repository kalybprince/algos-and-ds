/* 

Description: Given a string representing a sentence, reverse the
order of the words in the sentence. The words themselves should
not be reversed.
Example:

Input: "the quick brown fox"
Output: "fox brown quick the"

Hint: You'll likely need to split the string into words first,
then apply the reverse pattern to the array of words. Afterward,
join them back into a string.

*/

function reverseWords(string) {
  let splitStringArr = string.split(" ");

  for (let i = 0; i < splitStringArr.length / 2; i++) {
    let temp = splitStringArr[i];

    splitStringArr[i] = splitStringArr[splitStringArr.length - 1 - i];
    splitStringArr[splitStringArr.length - 1 - i] = temp;
  }
  return splitStringArr.join(" ");
}

console.log(reverseWords("These are words in a string"));
