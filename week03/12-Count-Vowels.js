function countVowels(str) {
  vowels = "aeiouAEIOU";
  let vowelCount = 0;
  for (let strIndex = 0; strIndex < str.length; strIndex++) {
    for (let vwIndex = 0; vwIndex < vowels.length; vwIndex++) {
      if (vowels[vwIndex] === str[strIndex]) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
}

function countVowels2(str) {
  vowels = "aeiouAEIOU";
  return Array.from(str).filter((char) => vowels.includes(char)).length;
}

console.log(countVowels2("Salam Thisii"));
