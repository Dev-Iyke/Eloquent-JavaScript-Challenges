//THE SUM OF RANGES
//This functions creates a range of numbers with a  start, end and increment or decrement step  defined by the user. a negative step causes the system to start from the bigger number between start and end. a positive step causes the system to just increment or decrement based on whether the start is smaller or greater than the end
const range = (start, end, step) => {
  arr = [];
  if (step) {
    if (step > 0) {
      if (start > end) {
        for (let i = start; i >= end; ) {
          arr.push(i);
          i -= step;
        }
      } else {
        for (let i = start; i <= end; ) {
          arr.push(i);
          i += step;
        }
      }
    } else if (step < 0) {
      if (start > end) {
        for (let i = start; i >= end; ) {
          arr.push(i);
          i += step;
        }
      } else {
        for (let i = start; i <= end; ) {
          arr.push(i);
          i -= step;
        }
      }
    }
  } else if (step == 0 || !step) {
    if (start > end) {
      for (let i = start; i >= end; ) {
        arr.push(i);
        i--;
      }
    } else {
      for (let i = start; i <= end; ) {
        arr.push(i);
        i += step;
      }
    }
  }

  return arr;
};

const numArr = range(-8, 1, -1);
//console.log(numArr)

//This function aims to add up the numbers in an array
function addArrayItems(arr) {
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
}
//console.log(addArrayItems(numArr))

// REVERSING AN ARRAY
//This function returns a new array
function reverseArray(arr) {
  let reversedArray = [];
  for (i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}
//console.log(reverseArray(numArr))
//console.log(numArr)

//This function mutates the array
function reverseArrayInPlace(arr) {
  for (i = 0; i < Math.floor(arr.length / 2); i++) {
    let oldValue = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = oldValue;
  }
  return arr;
}
//console.log(reverseArrayInPlace(numArr))
//console.log(numArr)



//A List
function arrayToList(arr){
  list = null
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list}
    //console.log(list)
  }
  return list;
}
//console.log(arrayToList([1, 2, 3]));

function listToArray(list){
  let arr = []
  while(list){
    arr.push(list.value)
    list = list.rest
    //console.log(list)
  }
  return arr
}
//console.log(listToArray(arrayToList([1, 2, 3])));

function prepend(element, list){
  let newList = { value: element, rest: list}
  return newList
}
//console.log(prepend(7, arrayToList([1, 2, 3])))

function nth(list, n){
  if (list == null) return undefined
  if (n == 0) return list.value
  else return nth(list.rest, n - 1)
}
//console.log(arrayToList([10, 20]));
//console.log(listToArray(arrayToList([10, 20, 30])));
//console.log(nth(arrayToList([10, 20, 30]), 0));



//Deep Comparison
let obj1 = {age: 30, name: 'Jay', role: 'admin'}
let obj2 = {role: 'admin', age: 30, name: 'Jay'}
//console.log(obj1 === obj2);
function deepEqual(val1, val2){
  let keys1 = Object.keys(val1);
  let keys2 = Object.keys(val2);

  if (val1 === val2) return true
  if (val1 == null || typeof val1 != 'object' || val2 == null || typeof val2 != 'object') return false
  if (keys1.length != keys2.length) return false
  for (let key in keys1) {
    if (!keys2.includes(key) || !deepEqual(val1[key], val2[key])) return false
  }
  return true
}
//console.log(deepEqual(obj1, obj1));


/* function getKeys(){
  let myKeys = []
  for (let key in obj1) {
    myKeys.push(key) 
  }
  return myKeys
}
console.log(getKeys())

console.log(Object.keys(obj1)) */
