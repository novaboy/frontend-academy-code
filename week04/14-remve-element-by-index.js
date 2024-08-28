function removeElementByIndex_2(arr, index) {
  arr.splice(index, 1);
  return arr;
}

function removeElementByIndex(arr, index) {
  return arr.slice(0, index).concat(arr.slice(index + 1));
}

let arr = ["john", "jeniffer", "mike", "zibra", "Alex", "mike"];

console.log(removeElementByIndex(arr, 2));
console.log(arr);
console.log(removeElementByIndex_2(arr, 2));
