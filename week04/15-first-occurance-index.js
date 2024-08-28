function firstOccuranceIndex_2(arr, element) {
  return arr.indexOf(element);
}

function firstOccuranceIndex(arr, element) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === element) {
      return i;
    }
    ++i;
  }
  retrun - 1;
}

let arr = ["john", "jeniffer", "mike", "zibra", "Alex", "mike"];

console.log(firstOccuranceIndex(arr, "mike"));
console.log(arr);
console.log(firstOccuranceIndex_2(arr, "mike"));
