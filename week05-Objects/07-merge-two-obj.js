//Merge Two Objects

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
const obj1 = { name: "Alice" };
const obj2 = { age: 25 };
const merged = mergeObjects(obj1, obj2);
console.log(merged);

function mergeObjectsIterate(objList) {
  // Check if objList is an array
  if (!Array.isArray(objList)) {
    throw new TypeError("The provided argument is not an array");
  }

  return objList.reduce((acc, obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        acc[key] = obj[key]; // Add or overwrite the property
      }
    }
    return acc;
  }, {});
}

const objList = [{ name: "Alice" }, { age: 25 }, { city: "Wonderland" }];
console.log("Merge Iterate:", mergeObjectsIterate(objList));
