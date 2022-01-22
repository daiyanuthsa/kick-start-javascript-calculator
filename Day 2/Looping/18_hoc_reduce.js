const numbers = [1,2,3,4,5,6,7,8,9];

const sum = numbers.reduce(function(total, value){
  total = total + value;
  return total
}, 0)

// console.log(sum)

// let result = 0;
// for (let i = 0; i < numbers.length; i++) {
//   result = result + numbers[i];
// }

// console.log(result)