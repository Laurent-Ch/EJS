// Min
const min = (a, b) => {
  if (a <= b) return a;
  else return b;
};

// Recursion
const isEven = (number) => {
  if (number === 0) return true;
  else if (number === 1) return false; 
  else if (number < 0) return isEven(-number);
  else return isEven(number - 2);
}

// Bean counting
const countChar = (str, char) => {
  let counter = 0;
  for (const s of str) {
    if (s === char) counter++;
  }
  return counter;
}


