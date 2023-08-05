const name = 'Nata';
let age = 26;
let userHobbies = true;
const whoIsUser = (names, ages, userHobbiess) =>
  'Name is ' + names + ', age is ' + ages + ', userHobbies is ' + userHobbiess;
console.log(whoIsUser(name, age, userHobbies));

const person = {
  name: 'Nata',
  age: 26,
  greet: function () {
    console.log('Hi myname is ' + this.name);
  },
};

console.log(person.greet());
