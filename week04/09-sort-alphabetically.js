function sortAlphabetically(arr) {
  arr = arr.map((str) => str.toLowerCase());
  return arr.sort();
}

let arr = ["john", "jeniffer", "mike", "zibra", "Alex"];

console.log(sortAlphabetically(arr));
