function lastOccuranceIndex_2(arr, element) {
  return arr.lastIndexOf(element);
}

function lastOccuranceIndex(arr, element) {
  for (let i = arr.length; i > 0; --i) {
    if (arr[i] === element) {
      return i;
    }
  }
  retrun - 1;
}

let arr = ["john", "jeniffer", "mike", "zibra", "Alex", "mike"];

console.log(lastOccuranceIndex(arr, "mike"));
console.log(arr);
console.log(lastOccuranceIndex_2(arr, "mike"));
