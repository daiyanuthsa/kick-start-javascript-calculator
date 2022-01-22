const person = {
  name: 'budi',
  age: 20,
  isMarried: false,
  city: 'jakarta'
};

const objectKeys = Object.keys(person);

for (let i = 0; i < objectKeys.length; i++) {
  console.log(person[objectKeys[i]]);
}