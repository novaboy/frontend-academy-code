function hasProperty(obj, key) {
  return obj.hasOwnProperty(key);
}

const obj = { name: "MReza", gender: "M" };

console.log(hasProperty(obj, "age"));
console.log(hasProperty(obj, "name"));
