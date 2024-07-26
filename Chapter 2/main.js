//TRIANGLE LOOP
let triangle = "";
let counter = 0;
while (counter < 7) {
  triangle = triangle + "#";
  console.log(triangle);
  counter = counter + 1;
}

//FIZZBUZZ
for (let count = 1; count <= 100; count++) {
  if (count % 3 == 0 && count % 5 == 0) {
    console.log("FizzBuzz");
  } else if (count % 3 == 0) {
    console.log("Fizz");
  } else if (count % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(count);
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
for (i = 0; i < 4; i++) {
    chessBoard();
}


console.log("\n BETTER WAY \n");

function createChessboard(size) {
    let board = '';

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            // Check if the sum of row and column is even or odd to decide the alternating pattern
            if ((row + col) % 2 === 0) {
                board += '#';
            } else {
                board += ' ';
            }
        }
        board += '\n';
    }

    console.log(board);
}

// Call the function with the desired size of the chessboard
createChessboard(8);
