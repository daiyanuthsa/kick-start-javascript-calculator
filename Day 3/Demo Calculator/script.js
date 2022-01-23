const NUMBERS = [1,2,3,4,5,6,7,8,9];
const OPERATOS = ['+', '-', 'X', '/'];
const CALCULATE = '=';
const CLEAR = 'C';

const oldValue = document.getElementById("old-value");
const newValue = document.getElementById("new-value");
const buttons = document.getElementsByTagName("button");

let newVal = 0;
let oldVal = 0;
let operator = '';

function handle(event) {
  const input = event.srcElement.innerText;

  if (NUMBERS.includes(parseInt(input)) || input == '00') {
    newVal = newVal == 0 
            ? newVal + parseInt(input) 
            : newVal + input;
    newValue.innerText = newVal;
  } else if (OPERATOS.includes(input)) {
    oldVal = newVal;
    operator = input;
    newVal = 0;

    newValue.innerText = newVal;
    oldValue.innerText = oldVal;
  } else if (input == CALCULATE) {
    switch(operator) {
      case '+': oldVal = parseInt(oldVal) + parseInt(newVal); break;
      case '-': oldVal = parseInt(oldVal) - parseInt(newVal); break;
      case 'X': oldVal = parseInt(oldVal) * parseInt(newVal); break;
      case '/': oldVal = parseInt(oldVal) / parseInt(newVal); break;
    }

    newVal = 0;
    operator = '';

    newValue.innerText = newVal;
    oldValue.innerText = oldVal;
  } else if (input == CLEAR) {
    newVal = 0;
    oldVal = 0;
    operator = '';

    newValue.innerText = newVal;
    oldValue.innerText = oldVal;
  }
}

function main() {
  Array.from(buttons).forEach(function(button){
    button.addEventListener("click", handle)
  });
}

main();