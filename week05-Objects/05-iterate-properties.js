//5. Write an algorithm to iterate over the properties of an object in JavaScript.

function iterateProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}` + ":" + `${obj[key]}`);
    }
  }
}

const obj = { name: "MReza", gender: "M" };

iterateProperties(obj);
