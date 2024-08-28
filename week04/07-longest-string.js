function longestString_2(arr) {
  return arr.reduce(
    (longest, str) => (longest.length > str.length ? longest : str),
    ""
  );
}

function longestString(arr) {
  let longest = "";
  for (let element of arr) {
    longest = longest.length > element.length ? longest : element;
  }
  return longest;
}

let a = [
  "hi",
  "dog",
  "unbrell",
  "invincible",
  "Pneumonoultramicroscopicsilicovolcanoconiosis",
];

console.log(longestString(a));
console.log(longestString_2(a));
