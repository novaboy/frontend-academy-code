function countWwordsOccurance(sentence) {
  let words = sentence.toLowerCase().match(/\w+/g);
  let wordCount = {};

  for (let word of words) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  return wordCount;
}

let str =
  "This is a sentece to test the count of each words. Each word in the the sentence will be counted and the words along with their counts will be displyed.";

console.log(countWwordsOccurance(str));
