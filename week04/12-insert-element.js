function insertElement(arr, index, element) {
  return arr.slice(0, index).concat(element, arr.slice(index));
}

function insertElement_2(arr, index, element) {
  arr.splice(index, 0, element);
  return arr;
}

let arr = ["123", 123, true, "false"];

console.log(insertElement(arr, 2, "missed"));
console.log(insertElement_2(arr, 2, "missed"));
