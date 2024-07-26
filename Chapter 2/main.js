const triangleDiv = document.getElementById('triangle');
const fizzbuzzDiv = document.getElementById('fizzbuzz');
const chessDiv = document.getElementById('chessboard');
const chessSize = document.getElementById('chess-size');


//TRIANGLE LOOP
function triangleLoop(){
    let triangle = "";
    let counter = 0;
    while (counter < 7) {
        triangle = triangle + "#";
        //console.log(triangle);
        triangleDiv.innerHTML += triangle + '<br />';
        
        counter = counter + 1;
    }
}


//FIZZBUZZ
function fizzBuzz(){
    for (let count = 1; count <= 100; count++) {
        if (count == 100){
          //console.log(count);
          fizzbuzzDiv.innerHTML += "Buzz" 
        }
        else if (count % 3 == 0 && count % 5 == 0) {
          //console.log("FizzBuzz");
          fizzbuzzDiv.innerHTML += "FizzBuzz" + ", ";
        } else if (count % 3 == 0) {
          //console.log("Fizz");
          fizzbuzzDiv.innerHTML += "Fizz" + ", ";
        } else if (count % 5 == 0) {
          //console.log("Buzz");
          fizzbuzzDiv.innerHTML += "Buzz" + ", ";
        } else {
          //console.log(count);
          fizzbuzzDiv.innerHTML += count + ", ";
        }
      }
}


//CHESSBOARD
function chessWidth() {
  let width = 8;
  let widthCount = 0;
  let row = "";
  while (widthCount < width) {
    row = row + " #";
    widthCount += 2;
  }
  console.log(row);
}
/* chessWidth(); */

function chessHeight() {
  let height = 8;
  let heightCount = 0;
  let column = "";
  while (heightCount < height) {
    column = column + "# ";
    heightCount += 2;
  }
  console.log(column);
}
/* chessHeight(); */

function chessBoard() {
  chessWidth();
  chessHeight();
}
/* for (i = 0; i < 4; i++) {
    chessBoard();
} */


//console.log("\n BETTER WAY \n");

function createChessboard(size) {
  chessDiv.textContent = ""
  size = chessSize.value
  if (size == '' || size % 2 !== 0) {
    chessDiv.innerHTML = 'Enter a valid even chessboard number';
    //console.log(size)
  }else{
    //console.log(size)
    chessDiv.innerHTML = `Yes! A chess board with ${size} rows and columns`;
    for (let row = 0; row < size; row++) {
      const eachRow = document.createElement('p')
        for (let col = 0; col < size; col++) {
            // Check if the sum of row and column is even or odd to decide the alternating pattern
            if ((row + col) % 2 === 0) {
              eachRow.innerHTML += '#'
            } else {
              eachRow.innerHTML += ' &nbsp; '
            }
        }
        chessDiv.appendChild(eachRow);
    }
  }

   
}


const chbd = (num) => {
  let board = ''
  for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {     
      if((i + j) % 2 === 0){      
        board += '#'
      }else{
         board += ' '
      }
    }
    board += '\n'
  }
  console.log(board)
}
//chbd(8)