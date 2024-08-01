const numbersList = [1, 2, 'hi', 4, 5]
console.log(numbersList.indexOf('hi'))
numbersList.splice(numbersList.indexOf('hi'), 1)
console.log(numbersList['length'])
console.log(numbersList)
numbersList.push(3)
console.log(numbersList)
let myObject = {
    name: 'sam',
    age: 32,
    role: 'admin',
    2: 'run'
}
console.log(myObject[2])

let str = 'Hello'
console.log(str)
const upStr = str.toUpperCase()
console.log(upStr)

const anyList = [{
    name: 'jay',
    age: 22,
    role: 'admin',
    2: 'run'
},
{
    name: 'tom',
    age: 31,
    role: 'admin',
    2: 'run'
},
{
    name: 'kay',
    age: 47,
    role: 'admin',
    2: 'run'
},
{
    name: 'sam',
    age: 27,
    role: 'admin',
    2: 'run'
}]
const visits = {visitors: 0, gifts: 0}
visits.visitors = 1;
console.log(visits)

for (const users of anyList) {
    console.log(users)
}
let x = 7
//console.log(x.toString(7))
console.log(x.toString().padStart(3, 0))


//Rest Parameter
const getMax = (...nums) => {
    let result = -Infinity
    for (let num of nums){
        if (num > result){
            result = num;
        }
    }
    return result;
}
console.log(getMax(...numbersList))
 
console.log(Math.random() * 2 * Math.PI)
console.log(Math.random() * 2 * Math.PI)
console.log(Math.random() * 2 * Math.PI)
console.log(Math.random() * 2 * Math.PI)
console.log(Math.random() * 2 * Math.PI)
console.log(Math.random() * 2 * Math.PI)
console.log(Math.random() * 2 * Math.PI)
console.log(Math.random() * 2 * Math.PI)
console.log(Math.random() * 2 * Math.PI)
console.log(Math.random() * 2 * Math.PI)


console.log(Math.cos(0.8))
console.log(Math.sin(1.4))


//JSON
