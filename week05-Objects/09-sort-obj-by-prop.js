//Sort an Array of Objects by a Specific Property

function sortByPropSortFunction(objList, prop) {
  if (typeof prop !== "string" || prop.trim === "") {
    console.log("Order property is null or empty");
  }

  objList.sort((a, b) => {
    valueA = a[prop];
    valueB = b[prop];

    if (valueA > valueB) return 1;
    if (valueA < valueB) return -1;
    return 0;
  });

  return objList;
}

const objList = [
  { name: "Alice", age: 10, city: "Wonderland" },
  { name: "Lyanna", age: 7, city: "Istanbul" },
  { name: "Somi", age: 40, city: "Tehran" },
];

console.log("Using sort Function");
console.log(sortByPropSortFunction(objList, "name"));

// Second solution

function sortByPropBubbleDesc(objList, prop, order) {
  if (typeof prop !== "string" || prop.trim === "") {
    console.log("Order property is null or empty");
  }

  const len = objList.length;
  for (let i = 0; i < len - 1; ++i) {
    for (let j = i + 1; j < len; ++j) {
      const valueA = objList[i][prop];
      const valueB = objList[j][prop];

      if (order === "desc") {
        if (valueA < valueB) {
          tempObj = objList[j];
          objList[j] = objList[i];
          objList[i] = tempObj;
        }
      } else if (order === "asc") {
        if (valueA > valueB) {
          tempObj = objList[j];
          objList[j] = objList[i];
          objList[i] = tempObj;
        }
      }
    }
  }
  return objList;
}

console.log("Using bubble sort Function");
console.log(sortByPropBubbleDesc(objList, "name", "desc"));
