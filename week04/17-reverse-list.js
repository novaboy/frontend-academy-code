function reverseList_2(arr) {
  return arr.reverse();
}

function reverseList(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

let arr = ["john", "jeniffer", "mike", "zibra", "Alex", "mike"];

console.log(reverseList(arr));
console.log(arr);
console.log(reverseList_2(arr));
