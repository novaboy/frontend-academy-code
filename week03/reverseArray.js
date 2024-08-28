function reverseArray(arr) {
  let reversedArr = [];
  arr.forEach((num, index) => {
    reversedArr[arr.length - 1 - index] = num;
  });
  return reversedArr;
}

let arr = [12, 13, 14, 15];
console.log(reverseArray(arr));
