const person = {
  name: 'budi',
  age: 20,
  isMarried: false,
  city: 'jakarta'
};

for (let key of Object.keys(person)) {
  console.log(person[key]);
}