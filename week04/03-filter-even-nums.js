function filterEvenNumbers(arr) {
  let evenNumbers = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }
  return evenNumbers;
}

function filterEvenNumbers_2(arr) {
  return arr.filter((num) => num % 2 === 0);
}

let a = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(filterEvenNumbers(a));
console.log(filterEvenNumbers_2(a));
