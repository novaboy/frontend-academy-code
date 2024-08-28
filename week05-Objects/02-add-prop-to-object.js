function addPropertyToObj(obj, key, value) {
  obj[key] = value;
}

const obj = {};
addPropertyToObj(obj, "name", "MReza");
console.log(obj);
