//Flatten
function flatten(arr) {
  return arr.reduce((a, b) => a.concat(b), []);
  //return 'First item must be an array'
}
let myArray = [1, [1, 2, 3], 1, [4, 5, 6], "B", [7, 8, 9], 10];
//console.log(flatten(myArray))



//Your Own Loop
//A loop that multiplies a decrementing value by a multiplier
function loop(startValue, multiplier, test, update, body) {
  let myArr = [];
  for (let value = startValue; test(value); ) {
    myArr.push(body(value, multiplier));
    value = update(value);
  }
  return myArr;
}

//Created small composable functions to grasp a better understanding of the concepts.
//I could have defined these functions when invoking the loop function.
function testFunction(t) {
  return t > 0;
}
function updateFunction(u) {
  return (u -= 1);
}
function bodyFunction(item, mul) {
  return item * mul;
}
//console.log(loop(5, 3, testFunction, updateFunction, bodyFunction))



//Everything
//The every() method returns true if every element in the array returns true for the given function

//Creating a random list of 5 number elements
counter = 0
let above = []
while (counter < 5){
  above.push(Math.ceil(Math.random() * 8 + 2));
  counter ++;
}
console.log(above)

//My every function that takes a callback function built with a for...of loop
function every(arr, func) {
  for(let item of arr) {
    //runs the callback function that returns true or false. and if there is any case that is not true (!true), then the every function immediately returns false
    if (!func(item)) return false
  }
  return true
}

//My every function that takes a callback function built with the some() method
function everyTwo(arr, func) {
  //since the some() method will return true and stops once it finds a case that satisfies the condition, we negated the result so it can keep checking till the end of the array. if all elements satisfy the condition, it then returns true
  return !arr.some(element => !func(element))
}
console.log(everyTwo(above, num => num > 4))