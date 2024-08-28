function findCommonElements(arr1, arr2) {
  let commonElements = [];
  for (let num of arr1) {
    if (arr2.includes(num) && !commonElements.includes(num)) {
      commonElements.push(num);
    }
  }
  return commonElements;
}

function findCommonElements_2(arr1, arr2) {
  return [...new Set(arr1.filter((num) => arr2.includes(num)))];
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8];
let b = [6, 7, 8, 9, 10, 11, 12];

console.log(findCommonElements(a, b));
console.log(findCommonElements_2(a, b));
