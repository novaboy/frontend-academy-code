function removeDuplicates_2(arr) {
  return [...new Set(arr)];
  // The `Set` object automatically removes duplicates, and `[...]` converts it back to an array.
}

function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let num of arr) {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  }
  return uniqueArr;
}

let a = [1, 1, 2, 2, 3, 3, 5, 6, 7, 8];
console.log(removeDuplicates(a));

console.log(removeDuplicates_2(a));
