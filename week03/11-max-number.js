function findMax(arr) {
  let maxnum = arr[0];
  for (let number of arr) {
    if (maxnum < number) {
      maxnum = number;
    }
  }
  return maxnum;
}

let arr = [12, 15, 18, 400, 34];
console.log(findMax(arr));
