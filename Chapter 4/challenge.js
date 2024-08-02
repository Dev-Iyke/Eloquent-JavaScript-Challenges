//THE SUM OF RANGES
//This functions creates a range of numbers with a  start, end and increment or decrement step  defined by the user. a negative step causes the system to start from the bigger number between start and end. a positive step causes the system to just increment or decrement based on whether the start is smaller or greater than the end
const range = (start, end, step) =>{
    arr = [];
    if (step){
        if (step > 0){
            if (start > end){
                for(let i = start; i >= end;){
                    arr.push(i);
                    i-=step;  
                }
            }else{
                for(let i = start; i <= end;){
                    arr.push(i);
                    i+=step;  
                }
            }          
        }else if (step < 0){
            if (start > end){
                for(let i = start; i >= end;){
                    arr.push(i);
                    i+=step;  
                }
            }else{
                for(let i = start; i <= end;){
                    arr.push(i);
                    i-=step;  
                }
            }         
        }       
    }else if (step == 0 || !step){
        if (start > end){
            for(let i = start; i >= end;){
                arr.push(i);
                i--;  
            }
        }else{
            for(let i = start; i <= end;){
                arr.push(i);
                i+=step;  
            }
        }          
    }
    
    return arr;
};

const numArr = range(-8, 1, -1)
console.log(numArr)

//This function aims to add up the numbers in an array
function addArrayItems(arr){
    let sum = 0;
    for (let item of arr){
        sum += item;
    }
    return sum;
}
//console.log(addArrayItems(numArr))


// REVERSING AN ARRAY
//This function returns a new array
function reverseArray(arr){
    let reversedArray = [];
    for (i = arr.length -1; i >= 0; i--){
        reversedArray.push(arr[i])
    }
    return reversedArray
}
console.log(reverseArray(numArr))
console.log(numArr)

//This function mutates the array
function reverseArrayInPlace(arr){
    for (i = 0; i < Math.floor(arr.length/2); i++){
        let oldValue = arr[i];
        arr[i] = arr[arr.length -1 - i]
        arr[arr.length -1 - i] = oldValue
    }
    return arr
}

console.log(reverseArrayInPlace(numArr))
console.log(numArr)

