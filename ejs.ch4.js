//  1. range and sum
const range = (start, end, step = 1) => {
  let arr = [];
  step = Math.abs(step);

  if (start > end) {  
    for (i = start; i >= end; i-= step) {
      arr.push(i);
    }
  }
  else {
    for (i = start; i <= end; i+= step) {
      arr.push(i);
    }
  }
  return arr;
}
// console.log(range(1, 10, 2));
// console.log(range(10, 1, 2));


const sum = (arr) => {
  let length = arr.length;
  let sum = 0;
  
  for (let i = 0; i < length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(sum(range(1, 10, 2)));
// console.log(sum(range(10, 1, 2)));

// 2. reverseArray and reverseArrayInPlace_____________________________________
/*
reverseArray takes an array as argument and produces a new array that has the same elements in the inverse order. 

reverseArrayInPlace does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? 
-> The first one, since we don't want side effects and we can assign the result to the original value if we want to. We get the best of both. 

Which one runs faster?
-> The one that mutates the data:
https://stackoverflow.com/questions/67969805/performance-of-mutating-object-versus-shallow-clone
*/

const reverseArray = arr => {
  let arrLength = arr.length;
  let newArr = [];
  
  for (let i = 0; i < arrLength; i++) {
    newArr.unshift(arr[i]);
  }
  return newArr;
}
let arr = [1, 2, 3, 4];
// console.log(reverseArray(arr));

const reverseArrayInPlace = arr => {
  let arrLength = arr.length;
  let arrMidFloor = Math.floor(arrLength / 2);

  for (let i = 0; i < arrMidFloor; i++) {
    let leftElt = arr[i];
    let rightElt = arr[arrLength - 1 - i];

    arr[i] = rightElt;
    arr[arrLength - 1 - i] = leftElt;

  }
}
let arr2 = [1, 2, 3, 4];
reverseArrayInPlace(arr2);
// console.log(arr2);

// 3. Lists____________________________________________________________________
/*
arrayToList builds up a list structure like the one shown when given [1, 2, 3] as argument. 

listToArray produces an array from a list. 

helper function prepend takes an element and a list and creates a new list that adds the element to the front of the input list, 

nth takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth.
*/

const arrayToList = arr => {
  let linkedList = {
    value: arr.shift(),
  }

  if (arr.length >= 1) {
    linkedList.rest = arrayToList(arr);
  }
  else {
    linkedList.rest = null;
  }
  return linkedList;
}

let arr3 = [1, 2, 3];
// console.log(arrayToList(arr3));

const listToArray = (list, targetArr = []) => {
  targetArr.push(list.value);  
  if (list.rest !== null) listToArray(list.rest, targetArr);
  return targetArr;
}
let list3 = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
// console.log(listToArray(list3));

const prepend = (value, list) => {
  let newList = { 
    value: value,
    rest: list,
  }
  return newList;
}
let valueToAdd = 0;
let list4 = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
// console.log(prepend(valueToAdd, list4));

// nth correction: gives the value at a given position
function nthCorrection(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

// My version: gives the position for a given value
const nth = (list, valueToCheck, position = 0) => {  
  if (list.value == valueToCheck) {
    return position;
  }
  else {
    if (!list.rest) {
      return ("not found");
    }

    position++
    return nth(list.rest, valueToCheck, position);
  }
}
let list5 = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
// console.log(nth(list5, 4));

// 4. Deep comparison
const deepEqual = (a, b) => {
  if (a === b) return true;
    
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
      return false;

  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

return propsInA == propsInB;
}
let objA = {here: {is: "an"}, object: 2};
let objB = {hare: {is: "an"}, object: 2};
console.log(deepEqual(objA, objB));
