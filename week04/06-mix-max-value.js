function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }
  return { min, max };
}

function findMinMax_2(arr) {
  return { min: Math.min(...arr), max: Math.max(...arr) };
}

let arr = [1, 2, 78, 65, 32, 700, 11.2, 2345.7, 0.9];

console.log(findMinMax(arr));
console.log(findMinMax_2(arr));
