// Arrays

let array = [0, 1, 2, 3];
// // console.log(array[2]);
// array[2] = 100;

// Adaugare element la final

array.push(5);
// console.log(array);

// Stergere element de la final

array.pop();
// console.log(array);

// Stergere element de la inceput

array.shift();
// console.log(array);

// Adaugarea unui element de la inceputul listei

array.unshift(0);
// console.log(array);

// console.log(array.indexOf(2));
array[array.indexOf(2)] = 100;
// console.log(array);

let newArray = array;
// console.log(newArray);

newArray = array.splice(1, 2);
// console.log(newArray);
// console.log(array);

// console.log(
//   array.filter(function (element) {
//     return element > 2;
//   })
// );

// console.log(
//   array.map(function (value) {
//     return value * 3;
//   })
// );

// console.log(array.reverse());

// console.log(array.join(' * '));
let myNumber = 5;
// console.log(typeof myNumber);
myNumber.toString();
// console.log(typeof myNumber);

// console.log(array.reduce(function(total,value)  {
//     return total + value;
// }));

// Objects
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};
// console.log(createPerson('Stefan', 30, 'unidentified'));

let person = {
  name: "Stefan",
  age: 30,
  address: {
    street: "1 street",
    country: "Romania",
    residents: "Stefan, Tokyo",
  },
  sayHi: function () {
    console.log(`Salut, sunt ${this.name} si am ${this.age} de ani`);
  },
};

console.log(person.name);
console.log(person.age);
person.sayHi();

let defaultPerson = {
  name: "Stefan",
  age: 30,
};
console.log(defaultPerson);

// let otherPerson = new Object();
// otherPerson.name = 'Alex';
// otherPerson.age = 25;
// console.log(otherPerson);

let otherOtherPerson = Object.create(defaultPerson);
otherOtherPerson.name = "Mircea";
console.log(otherOtherPerson);

const bicycle = {
  gear: 21,
  setGear(gear) {
    this.gear = gear;
  },
};

console.log(bicycle.gear);
bicycle.setGear(5);
console.log(bicycle.gear);

// Classes

class Book {
  constructor(author) {
    this.author = author;
  }
//   get writter() {
//     return this.writter;
//   }

//   set writter(updatedName) {
//     this.author = author;
//   }
}

const story = new Book('Petre Ispirescu');
console.log(story);
// story.writter('Fratii Grim');

let planet = function(name) {
    this.desiredName = name;
}
let newPlanet = new planet('Jupiter');
console.log(newPlanet);