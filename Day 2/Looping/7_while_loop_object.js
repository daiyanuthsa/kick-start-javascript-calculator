const person = {
  name: 'budi',
  age: 20,
  isMarried: false,
  city: 'jakarta'
};

const objectKeys = Object.keys(person);

let i = 0;
while(i < objectKeys.length) {
  console.log(person[objectKeys[i]]);
  i++;
}