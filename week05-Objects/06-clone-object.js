// first
const original = { name: "Alice", age: 25 };
const clone = { ...original };
console.log("Function-", clone);

// Second
function cloneObjectJSON(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const clone1 = cloneObjectJSON(original);
console.log("JSON-", clone1);

// third
const clone3 = {};

function cloneObject(obj) {
  const clone3 = {};
  // Iterate over the keys of the original object
  for (const key in original) {
    if (original.hasOwnProperty(key)) {
      // Check if the key is directly on the object
      clone3[key] = original[key]; // Copy the value to the clone
    }
  }
  return clone3;
}

console.log("Iterate-", cloneObject(original));
