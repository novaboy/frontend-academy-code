function mergeSortedLists(arr1, arr2) {
  let mergedList = [];
  arr1 = [...new Set(arr1)].sort((a, b) => a - b);
  arr2 = [...new Set(arr2)].sort((a, b) => a - b);
  console.log(arr1);
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    console.log(
      "arr1[" + i + "]=" + arr1[i] + " - " + "arr2[" + j + "]=" + arr2[j]
    );
    if (arr1[i] <= arr2[j]) {
      mergedList.push(arr1[i]);
      i++;
    } else {
      mergedList.push(arr2[j]);
      j++;
    }
  }
  return [...new Set(mergedList.concat(arr1.slice(i)).concat(arr2.slice(j)))];
}

function mergeSortedLists_2(arr1, arr2) {
  return [...new Set(arr1.concat(arr2).sort((a, b) => a - b))];
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8];
let b = [6, 7, 8, 9, 10, 11, 12];

console.log(mergeSortedLists(a, b));
console.log(mergeSortedLists_2(a, b));
