function removeByValue(arr, value) {
  if (arr.includes(value)) {
    arr = arr
      .slice(0, arr.indexOf(value))
      .concat(arr.slice(arr.indexOf(value) + 1, arr.length));
  }

  return arr;
}

function removeByValue_2(arr, value) {
  let index = arr.indexOf(value);

  if (index != -1) {
    arr.splice(index, 1);
  }

  return arr;
}

function removeByValue_3(arr, value) {
  return arr.filter((element) => element != value);
}

let arr = ["john", "jeniffer", "mike", "zibra", "Alex"];

console.log(removeByValue(arr, "mike"));
console.log(removeByValue_2(arr, "zibra"));
console.log(removeByValue_3(arr, "Alex"));
