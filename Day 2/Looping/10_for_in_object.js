const person = {
  name: 'budi',
  age: 20,
  isMarried: false,
  city: 'jakarta'
};

for (let key in person) {
  console.log(person[key]);
}