/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/
const Stack = require('./Stack')


//Exercise 1
const findFactorial = function (target, sum = 1) {
  if (target === 1) { return sum }
  sum *= target
  target--
  return findFactorial(target, sum)
}

//Exercise 2
const reverseString = function (str) {
  if (str === "")
    return "";

  else
    return reverseString(str.substr(1)) + str.charAt(0);
}

//Exercise 3
// const arr1 = [1, 2, 3]
// const arr2 = []

// const swap = function (arr1, arr2) {
//   if (arr1.length === 0) { return arr2 }

//   arr2.push(arr1.shift())
//   return swap(arr1, arr2)
// }

const s1 = new Stack()
const s2 = new Stack()

s1.push(1)
s1.push(2)
s1.push(3)
s1.push(4)

const swapStacks = function (s1, s2) {
  if (s1.isEmpty()) { return s2 }

  s2.push(s1.pop())
  return swapStacks(s1, s2)
}


// console.log(findFactorial(5));
// console.log(reverseString("roi"));
// swap(arr1, arr2)
// console.log(arr1) //[]
// console.log(arr2) //[1, 2, 3]


swapStacks(s1,s2)
console.log(s1);
console.log(s2);

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swapStacks }