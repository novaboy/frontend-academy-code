function squareValue_2(arr) {
  return arr.map((num) => num * num);
}

function squareValue(arr) {
  let squareValueList = [];
  for (let num of arr) {
    squareValueList.push(num * num);
  }
  return squareValueList;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(squareValue(arr));

console.log(squareValue_2(arr));
