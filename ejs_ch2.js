// Mario's pyramid
// console.log automatically goes to the next line at the end.
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);


  // Fizzbuzz
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

// Chessboard
// The order of the loops must follow the order in which we build up the string (line by line, left to right, top to bottom).
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

