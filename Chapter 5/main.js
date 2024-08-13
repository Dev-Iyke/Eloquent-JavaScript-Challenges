//A function that creates a new function
function greaterThan(x) {
  return (y) => y > x;
}
let greaterThan8 = greaterThan(8);
console.log(greaterThan8(14));

//A function that changes another function
function noisy(func) {
  return (...args) => {
    console.log("calling with", args);
    let result = func(...args);
    console.log("called with", args, ", returned", result);
    return args;
  };
}
args = noisy(Math.min)(3, 2, 1);
console.log(noisy(Math.min)(3, 2, 1));
//The Math.min function now works in a different way, other than just receiving a list of numbers in its parenthesis as parameters

//A function that provides new types of control flow
function unless(test, then) {
  if (!test) then();
}

repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
//repeat(3, console.log)

//STANDARD ARRAY METHODS:
//Filtering Arrays
function filter(array, testerFunction) {
  filteredResults = [];
  for (let item of array) {
    if (testerFunction(item)) {
      filteredResults.push(item);
    }
  }
  return filteredResults;
}
console.log(filter(args, (x) => x % 2 == 0));

//Transforming Arrays with map
function map(array, mapFunction) {
  mappedResults = [];
  for (let item of array) {
    let mapped = mapFunction(item);
    mappedResults.push(mapped);
  }
  return mappedResults;
}
console.log(map(args, (item) => item * 4));

//Summarizing arrays with reduce
function reduce(array, reducerFunction, startValue) {
  currentState = startValue;
  for (let item of array) {
    currentState = reducerFunction(item, currentState);
  }
  return currentState;
}
console.log(reduce(args, (x , y) => x + y, 0))

//The standard reduce function may not be given a starting value if the array contains more than one element
console.log(args.reduce((a, b) => a + b))

//Lets try to reduce twice: getting which script has the most characters. This is done by subtracting the range of characters in each script(by destructuring) and comparing it to the other scripts
function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
      return count + (to - from);
    }, 0);
  }
console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
  }));
//SCRIPTS is not defined here

//Composable
//Learning to write smaller functions that can always be used again