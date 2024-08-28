// Write an algorithm to convert an object into an array in JavaScript.

function objectToArray(obj) {
  const arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push([key, obj(key)]);
    }
  }
}

function objectToArray(obj) {
  return Object.entries(obj);
}
const obj = { name: "Alice", age: 25 };
const arr = objectToArray(obj);
console.log(arr);

console.log(objectToArray(obj));
