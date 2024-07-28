const exp = function(base, pow){
    let res = 1;
    for(let count = 1; count <= pow; count++){
        res= res * base;
    }
    return res;
}
console.log(exp(2,10))

let v=8;
if(true){
    let y = 12
    let d = 6
    var g= 28;
    console.log(y)
    console.log(y+g-v)


}
console.log(v+g)
/* console.log(v+d) */

//USING FUNCTIONS AS VARIABLES
let greetings = function(){
    console.log("hello")
};
if(true){
    greetings = function(){};
}
greetings()

const horn = (carSound) => {return "wheeezzz"}

const horn2 = carSound => "wheeezzz";

console.log(horn());
console.log(horn2());


/* function rice(){
    return stew();
}
function stew(){
    return rice();
}

console.log(rice() + "is coming first") */

//CLOSURE: Deals with remembering the environment a function was called
function mul(factor){
    return num => num * factor //a function with a num parameter
}
let twice = mul(6) //creates an environment to bind factor to 6
console.log(twice(5)) //multiplies the 5 to the value of factor in the saved environment


//RECURSION
function findSolution(target) {
    function find(current, history) {
    if (current == target) {
    return history;
    } else if (current > target) {
    return null;
    } else {
    return find(current + 5, `(${history} + 5)`) ||
    find(current * 3, `(${history} * 3)`);
    }
    }
    return find(1, "1");
}
console.log(findSolution(24));



let x = "1" * 4
console.log(x)
console.log(x-3)

function farmRecords(dogs, cats){
    let dogStr= String(dogs);
    while(dogStr.length<3){
        dogStr = "0"+dogStr;
    }
    console.log(dogStr)

    let catStr= String(cats);
    while(catStr.length < 3){
        catStr = "0"+catStr
    }
    console.log(catStr)
}
farmRecords(55, 7);

function threeDigits(num, name){
    let numToString= String(num);
    while(numToString.length < 3){
        numToString = "0" + numToString;
    }
    
    console.log(numToString + name);
}

const records = (pigs, cattles, donkeys)=>{
    threeDigits(pigs, " Pigs")
    threeDigits(cattles, " cattles")
    threeDigits(donkeys, " donkeys")
    
    return pigs;
}
let a = records(5, "great", 82)
console.log(a)