// Arrays
let array = [1,2,3]; 
// console.log(array[2]);
// array[4] = 100;
// array[6] = 200;

// Adaugare element la final de array
array.push(5);
// console.log(array);

// Stergere element de la final de array
array.pop();
// console.log(array);

// Stergerea unui element de la inceputul array-ului

// let shiftElem = array.shift();
// console.log(shiftElem);
// console.log(array.shift());
// console.log(array);

// Adaugarea unui element de la inceputul array-ului

array.unshift(0);
// console.log(array);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
}
// let randomFunction = function (element) {
//     console.log(element);
// };
// array.forEach(randomFUnction());
array.forEach(function (element) {
    // console.log(element);
});

array.forEach( (element) => {
    // console.log(element);
});

function addTwo (element) {
    return element + 2;
}

// let numberPlusTwo = addTwo(5);
let numberPlusTwo = function(element) {
    return element + 2;
}
// console.log(array);

// console.log(array.indexOf(2));
array[array.indexOf(2)] = 100;
// console.log(array);

let newArray = array;

// newArray = array.splice(2); // un parametru ce reprezinta indexul de la care va incepe sa decupeza
// newArray = array.splice(1,2); // 2 parametrii, indexul si numarul de elemente ce vor fi decupate
// console.log(newArray);
// console.log(array);

newArray = array.slice(2); // un parametru ce reprezinta indexul de la care va incepe sa copieze
newArray = array.slice(1,2);  // indexii de inceput si de final intre care va copia
// console.log(newArray);
// console.log(array);

// console.log(array.filter(function(element) {
//     return element > 2;
// }));

// console.log(array.map(function(element){
    // return element * 2;
// }));
// console.log(array);
// console.log(array.reverse());

// console.log(array.join('*')); // Transform array to string
let myNumber = 5;
// console.log(typeof myNumber);
myNumber.toString()
// console.log(typeof myNumber);

// console.log(array.reduce(function(total, value) {
//     return total + value;
// }));

// Objects

// const createPerson = (name, age, gender) => {
//     return {
//        name: name,
//        age: age,
//        gender: gender 
//     }
// };
const createPerson = (name, age, gender) => {
    return {name, age, gender }
};
// console.log(createPerson('Sergiu', 30, 'unidentified'));

let person = {
    name: 'Sergiu',
    age: 30,
    address: {
        street: '1 street',
        country: 'Romania',
        residents: ['Sergiu', 'Tokyo']
    },
    sayHi: function() {
        console.log(`Salut, sunt ${this.name} si am ${this.age} ani si locuiesc pe strada ${this.address.street}`);
    }
};
console.log(Object.hasOwnProperty());
// console.log(person.name);
// console.log(person.age);
// person.sayHi();

let defaultPerson = {
    name: 'Sergiu',
    age: 30
}
// console.log(defaultPerson);

// let otherPerson = new Object();

let otherPerson = {
    name: 'Sergiu',
    age: 30
}
// otherPerson = {};
// otherPerson.name = 'Sergiu';
// otherPerson.age = 30;
// console.log(otherPerson);
// console.log(defaultPerson == otherPerson);

let otherOtherPerson = new Object(defaultPerson);
otherOtherPerson.name = 'Mircea';
// console.log(otherOtherPerson);

const bicycle = {
    gear: 21,
    setGear(gear) {
        this.gear = gear;
    }
}
console.log(bicycle.gear);
bicycle.setGear(5);
console.log(bicycle.gear);

// Classes 

class Book {
    constructor(author) {
        this.author = author;
    }
    // get writter() {
    //     return this.writter;
    // }

    // set writter(updatedName) {
    //     this.author = author;
    // }
}

const story = new Book('Petre Ispirescu');
// console.log(story);
// story.writter('Fratii Grim');

let Planet = function(name) {
    this.desiredName = name;
}
let newPlanet = new Planet('Jupiter');
console.log(newPlanet);