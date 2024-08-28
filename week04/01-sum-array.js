function sumOfArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

function sumOfArray2(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

let a = [1, 2, 3, 4, 5];
console.log(sumOfArray(a));

console.log(sumOfArray2(a));
