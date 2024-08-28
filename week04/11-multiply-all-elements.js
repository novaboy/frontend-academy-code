function multiplyAllElements_2(arr) {
  return arr.reduce((number, result) => (result *= number), 1);
}

function multiplyAllElements(arr) {
  let product = 1;
  for (let number of arr) {
    product *= number;
  }
  return product;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(multiplyAllElements_2(arr));
console.log(multiplyAllElements(arr));
