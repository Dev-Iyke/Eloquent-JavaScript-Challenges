//GETTING THE MINIMUM OF TWO NUMBERS
function min(num1, num2){
    if(num1 < num2){
        return num1
    }
    else if(num1 == num2){
        return "Equal numbers"
    }
    else{
        return num2;
    }
}
//console.log(min(4, 9));


//RECURSION
function isEven(num){
    return num == 0 ? true
     : num == 1 ? false
     : num < 0 ? isEven(-num)
     : isEven(num - 2)
}
//console.log(isEven(6))

//BEAN COUNTING
function countChar(str, char){
    let counter = 0
    for (i = 0; i < str.length; i++){
        if (str.charAt(i) == char){
            counter ++
        }
    }
    return counter
}

function letterCounter(str){
    return countChar(str, 'B')
}

//console.log(letterCounter('Bobby Ben'))
//console.log(countChar('Breaking bad Ben', 'b'))