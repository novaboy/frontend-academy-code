function deleteProperty(obj, key) {
  delete obj[key];
}

const obj = { name: "MReza" };

console.log(obj);

deleteProperty(obj, "name");

console.log(obj);
