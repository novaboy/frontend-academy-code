function isEmpty_2(arr) {
  return !arr ? false : true;
}

function isEmpty(arr) {
  return arr.length === 0;
}

let arr = [];

console.log(isEmpty(arr));
console.log(isEmpty_2(arr));
