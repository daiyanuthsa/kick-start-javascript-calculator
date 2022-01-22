const numbers = [1, 46,  33, 12, 47, 52, 77]; 
let oddNum = [];
let evenNum = [];

numbers.forEach(number => {
  if (number % 2 == 0) {
    evenNum.push(number);
  } else {
    oddNum.push(number)
  }
});

console.log("even numbers", evenNum);
console.log("odd Num", oddNum);