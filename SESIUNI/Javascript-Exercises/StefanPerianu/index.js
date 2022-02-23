// // // Primitives: number, string, boolean, null, undefined, symbol
// // // References: objects, arrays, functions

// // // Numbers

// // const monthlyPaycheck = 3000;
// // const dailyPaycheck = 150.5;
// // console.log(monthlyPaycheck);

// // // Nu se executa
// // /**
// //  * asfkldajsfk
// //  * dasfkjafsdkj
// //  * dsafkjlksafdjlk
// //  * asdklfhladsf
// //  */

// // const yearlyPaycheck = monthlyPaycheck * 12;

// // console.log(yearlyPaycheck);

// // // const class = 5;

// // // String

// // // const fullName = "Sergiu Savin O'heary";
// // const fullName = "Sergiu Savin O'heary";
// // const address = "Brasov, Romania";
// // const zipcode = `500500`;

// // console.log(fullName.toUpperCase);

// // const age = 30;
// // const personInfo =
// //   "Salut " +
// //   fullName +
// //   " ! Bine ai venit la curs. " +
// //   `Si varsta mea este de ${age} ani`;
// // // const personInfoTemplate = `Salut ${fullName} ! Bine ai venit la curs.Varsta mea este ${age} de ani`;
// // console.log(personInfo);
// // console.log(
// //   `Salut ${fullName} ! Bine ai venit la curs.Varsta mea este ${age} de ani`
// // );

// // // Boolean

// // let lightsOn = true;

// // // if (lightsOn === true) {
// // if (age !== true) {
// //   // if (!age) {
// //   console.log("Luminile sunt aprinse");
// // } else {
// //   console.log("Luminile sunt stinse");
// // }

// // if (age === "30") {
// //   console.log("Ceva");
// // } else {
// //   console.log("Altceva");
// // }
// // const randomNumber = 5;
// // const randomStringNumber = "5";
// // console.log(randomStringNumber + randomNumber);

// // const temperature = 10;
// // let roomTemperature = 18;

// // if (temperature > 10) {
// //   console.log("E placut afara.");
// // } else if (temperature >= 0) {
// //   console.log(
// //     "E frig si urat afara iar in camera sunt " + roomTemperature + " grade"
// //   );
// //   roomTemperature = roomTemperature + 3;
// //   console.log(
// //     "E frig si urat afara iar in camera sunt " + roomTemperature + " grade"
// //   );
// // } else {
// //   console.log("E mult prea frig si urat afara. Ia fular si manusi!");
// //   roomTemperature = roomTemperature + 4;
// //   // roomTemperature += 4;
// // }

// // // Objects

// // const person = {
// //   fullName: "Sergiu Savin",
// //   city: "Brasov",
// //   county: "Brasov",
// //   age: 30,
// //   lovesCold: false,
// //   address: {
// //     city: "Brasov",
// //     street: "123 street",
// //     apt: 12,
// //     zipcode: "500500",
// //   },
// // };

// // console.log(person);
// // console.log(person.city);
// // console.log(person.address.zipcode);
// // console.log(person["address"].zipcode);

// // // Arrays

// // const sunday = "Sunday";
// // const daysOfWeek = [
// //   "Monday",
// //   "Tuesday",
// //   "Wednesday",
// //   "Thursday",
// //   "Friday",
// //   "Saturday",
// //   sunday,
// // ];
// // console.log(daysOfWeek);
// // console.log(daysOfWeek[0]);
// // console.log(daysOfWeek[6]);
// // console.log(daysOfWeek.length);

// // daysOfWeek.push('Restday');
// // // daysOfWeek.unshift('Reestday');
// // console.log(daysOfWeek);

// // daysOfWeek.pop();
// // console.log(daysOfWeek);

// // daysOfWeek.shift();
// // console.log(daysOfWeek);

// // ---------------------------------

// // Number

// // const firstNumber = 10;
// // const secondNumber = 3;

// // let result = firstNumber + secondNumber; // 13
// // result = firstNumber - secondNumber; // 7
// // result = firstNumber * secondNumber;
// // result = firstNumber / secondNumber;
// // result = firstNumber % secondNumber;

// // console.log(result);

// // // String

// // let firstString = '1';
// // console.log(firstString + result);

// // // Boolean
// // let firstBoolean = '';

// // if (firstBoolean === false) {
// //   console.log('firstBoolean');
// //   console.log('Adevarat');
// // } else {
// //   console.log('firstBoolean');
// //   console.log('Fals');
// // }

// // // Objects

// // const firstObject = {
// //   nume: 'S',
// //   varste: 30,
// //   adresa: {
// //     ceva: 'asd',
// //     altceva: 2
// //   }
// // }
// // console.log(firstObject);
// // console.log(firstObject.adresa.altceva);

// // // Arrays

// // const cumparaturi = ['rosii', 3, {cost: '300', data: 'azi'}];

// // console.log(cumparaturi[1]);

// // Loops

// // marksOf10Lei = marksOf10Lei + 1;
// // ++marksOf10Lei;
// // marksOf10Lei += 5;
// // marksOf10Lei++; // 1
// // marksOf10Lei++; //2
// // // ........
// // marksOf10Lei++; // 10

// let marksOf10Lei = 0;

// while (marksOf10Lei < 3) {
//   // console.log('Ceva');
//   marksOf10Lei++;
// }

// if (marksOf10Lei < 3) {
//   // console.log('Ceva');
//   marksOf10Lei++;
// }
// // console.log(`Avem ${marksOf10Lei} bancnote de 10 lei`);
// // console.log('altceva')

// let marksOf1Lei = 0;
// const repeat = 5;

// for (let i = 0; i < repeat; i++) {
//   // console.log(`A  ${i}-a oara cand intra in bucla`);
//   marksOf1Lei++;
// }
// // console.log(`Avem ${marksOf1Lei} bancnote de 1 leu`);

// const word = "testing ";
// const repeatWords = 50;
// let words = "";

// for (let i = 0; i < repeatWords; i++) {
//   words += word;
// }
// console.log(words);

// // Nu pune niciodata o conditie mereu adevarata
// // let marksOf50Lei = 10;

// // while (marksOf50Lei > 3) {
// //   marksOf50Lei++;
// //   console.log(marksOf50Lei)
// // }

// const isPizzaGood = false;
// if (isPizzaGood) {
//   console.log("Pizza e buna");
// } else {
//   console.log('Pizza nu e buna')
// }
// const pizzaPrice = 30;

// if (pizzaPrice < 40) {
//   console.log("Pizza e ieftina");
// } else {
//   console.log('Pizza nu e ieftina')
// }

// //  && si
// //  || sau 

// const hasGorgonzola = true;

// if (pizzaPrice < 40 || (isPizzaGood === true) && hasGorgonzola) {
//   console.log("Pizza isi merita banii");
// } else if (true ){
//   console.log('Pizza nu isi merita banii')
// }
// const name1 = 'Andrei';
// const name2 = 'Darius';
// const name3 = 'Alexandra';

// // Functions

// function addTwo(number) {
//   return number + 2;
// }

// console.log(addTwo(3));
// console.log(addTwo(5));

// let firstName = 'Andrei';
// let cevaInExterior = ' Declarat in exterior';
// function sendEmail(firstName, lastName, profession, result, exam) {
//   let cevaInInterior = 'Declarat in interior';
//   firstName = 'Alexandra';
//   return `Salutare ${lastName},
//   Ai obtinut nota ${result} la examenul ${exam}.
//   Mult succes in continuare ${firstName}!`;
// }

// console.log(sendEmail('Sergiu', 'Savin', 'Lord', 10, 'Curs de Front End'));
// console.log(`Variabila declarata global ramane ${firstName}`);
// // console.log(sendEmail('Sergiu', 'Savin', 'Lord', 10));

// // Scope 
// // let cannotSeeMe;
// let globalVar = 'unchanged';

// const cannotSeeMe2 = 'Can\'t see';

// function addFive(number) {
//   globalVar = 'changed';
//  const cannotSeeMe = 'You cannot see me outside of this scope {}';
//   // console.log(cannotSeeMe);
//   if (true) {
//     const cannotSeeMe2 = 'Can\'t see';
//     console.log(cannotSeeMe);
//   }
//   // console.log(cannotSeeMe2);
//   return number + 5;
// }
// // console.log(globalVar);
// console.log(globalVar);
// // console.log(cannotSeeMe);
// // console.log(cannotSeeMe2);

// let needMoney = false;

// if (needMoney) {
//   addFive(10);
// }
// console.log(globalVar);

// const myCity = 'Florenta';
// const myState = 'Toscana';
// const country = 'Italia';

// function logYourAddress(city, state, country) {
//   console.log(`You're from ${city},,,, ${state} ${country}`);
// }

// logYourAddress('Brasov', 'Brasov', 'Romania');
// logYourAddress(myCity, myState, country);

// let a = 5;
// const b = a;

// function add10(number) {
//   console.log(number)
//   return number + 10;
// }

// const add10 = function (number) {
//   console.log(number)
//   return number + 10;
// }

// const varAdd10 = add10;
// console.log(add10(3));
// console.log(varAdd10(5));



// Numbers
// let a = 10;
// let b = 5;
// let c = a + b;

// // Strings
// let d = 'Tot ce vreau eu "sadasd"';
// let e = `Stringuri mai complexe ${d}`;
// let f = "O'heaery";

// // Booleans

// let g = true;

// // Arrays

// let h = ['Ceva', 3, false, ['Altceva', 2], {name : 'S', age: 30}, null, undefined];
// console.log(h[4].age);

// // Objects

// let i = {
//   country: 'Romania',
//   age: 15,
//   drives: function (params) {

//     console.log('Conduce!');
//   }
// }

// console.log(`Obiectul i are varsta de ${i.age}, iar arrayul h are varsta de ${h[4].age}`);
// i.drives();

// // Functions

// function show(city = 'Bucuresti') {
//   if (city) {
//     console.log(city);
//   } else {
//     console.log('Bucuresti')
//   }
//   // city = city || 'Bucuresti';
//   console.log(city);
// }

// show('Cluj');

// function showAgain(arg1 = 1, arg2 = 'Definit Default', arg3, arg4 = true, arg5) {
//   return {
//     arg1: arg1,
//     arg2,
//     arg3,
//     arg4,
//     fifthArgument: arg5
//   }
// }

// console.log(showAgain(3, false,''));

// let j = 5;
// let k = j;

// console.log(k);

// function doNothing(a, b) {
//   console.log(a * b);
//   return 'Mi-am facut treaba cu ce mi-ai dat, si asta te intereseaza pe tine acum';
// }

// // let l = doNothing(2,7);

// console.log(doNothing(2,7));


// // function doPizza(param1, param2, param3 = 'gorgonzola') {
// //   console.log(`Pizzzzza mea este formata din ${param1}, ${param2}, ${param3}`);
// //   return `Pizza mea este formata din ${param1}, ${param2}, ${param3}`;
// // }

// let doPizza = function (param1, param2, param3 = 'gorgonzola') {
//   console.log(`Pizza mea este formata din ${param1}, ${param2}, ${param3}`);
//   return `Pizza mea este formata din ${param1}, ${param2}, ${param3}`;
// }
// doPizza();

// // Arrow functions

// let doBurger = (param1, param2, param3 = 'gorgonzola') => {
//   console.log(`Burgerul meu este format din ${param1}, ${param2}, ${param3}`);
//   return `Burgerul meu este format din ${param1}, ${param2}, ${param3}`;
// }

// doBurger('chifla', 'carne vita');

// // let doBurger = (param1) => { 
// //   return `Burgerul meu este format din ${param1}`;
// // }

// let m = 5;
// let n = 5;

// if (m === n) {
//   console.log('Equal');
// } else {
//   console.log('Not equal');
// }

// // Ternary operator
// console.log( m === n ? 'Equal' : 'Not equal');

// var x = 1;
// let y = 2; 
// const z = 3;

// function doNothingAgain() {
//   var x = 4;
//   let y = 5; 
//   let z = 6;
//   console.log(`FUNCTION SCOPE: X are valoarea ${x}, Y are valoarea ${y}, iar Z are valoarea ${z}.`);
// }
// doNothingAgain()

// if(true) {
//   var x = 4;
//   let y = 5; 
//   const z = 6;
//   console.log(`Block SCOPE: X are valoarea ${x}, Y are valoarea ${y}, iar Z are valoarea ${z}.`);
// }



// console.log(`X are valoarea ${x}, Y are valoarea ${y}, iar Z are valoarea ${z}.`);

// let complexObject = {
//   name: 'Sergiu Savin',
//   address : {
//       street: '1Str',
//       zip: 500500
//   },
//   favouriteMovies: [],
//   likes: ['Food', 'Wine', 'Travel'],
//   watchMovie: (film = 'The Witcher') => {
//     console.log(`Uita-te la un film! sugestie: ${film}`);
//   },
//   sleep: () => {
//     console.log('Culca-te!');
//   },
//   age: 30
// }

// for (let i = 0; i < complexObject.favouriteMovies.length; i++) {
//   complexObject.watchMovie(complexObject.favouriteMovies[i]);
// }

// // let ii = 0;
// // while (ii <= complexObject.favouriteMovies.length) {
// //   complexObject.watchMovie(complexObject.favouriteMovies[ii]);
// //   ii++;
// // }

// // let iii = 0;
// // do {
// //   complexObject.watchMovie(complexObject.favouriteMovies[iii]);
// //   iii++;
// // }
// // while(iii < complexObject.favouriteMovies.length)

// Cursul 19

function logStuff(stuff) {
  console.log(`Rezultatul este: ${stuff}`);
}

let sum = 0;
function addToSum(number) {
 return sum = sum + number;
  // sum += number;
}
addToSum(3);
addToSum(10);
let totalSum = addToSum(10);
// logStuff(totalSum);
// logStuff(sum);

function myFunction() {
  // logStuff('Hello');
  // logStuff('You can\'t see me');
  return 'Sergiu';
  // logStuff('You can\'t see me');
}

let newVar = myFunction();
newVar = newVar + ' Savin';
// logStuff(newVar);

let sumNumbers = function (number1, number2) {
  return number1 + number2;
}

let sumNumbersArrow = (number1, number2) => {
  return number1 + number2;
}

let sumTwoNumbers = sumNumbersArrow(5,10);
// logStuff(sumNumbers(2,3));
// logStuff(sumTwoNumbers);

function verifyEquality(num1, num2) {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}

function verifyEqualitySimplified(num1, num2) {
  return num1 === num2;
}

// logStuff(verifyEquality(5,'5'));
// logStuff(verifyEqualitySimplified(5,5));

function doubleValue(num1) {
  return num1 * 2;
}

// logStuff(doubleValue(4));

function sayHey(name = 'Stefan') {
  return `Salut ${name}`;
}

// logStuff(sayHey('Robert'));

function testTrueOrFalse(value) {
  if (value === true) {
    return 'E adevarat';
  } else {
    return 'Nu e adevarat';
  }
}
// logStuff(5);
// logStuff(testTrueOrFalse(true));
// logStuff(testTrueOrFalse(5*2));
// logStuff(testTrueOrFalse(5 === 5));

// function removeBfromA(a, b) {
//   if (a >= b) {
//     return a - b;
//   } else {
//     return b;
//   }
// }

let removeBfromA = (a, b) => {
  if (a >= b) {
    return a - b;
  } else {
    return b;
  }
}

// removeBfromA(4,1); // 3
// removeBfromA(10,3); // 7
// removeBfromA(7,11); // 11

// logStuff(removeBfromA(4,1));
// logStuff(removeBfromA(10,3));
// logStuff(removeBfromA(7,11));

let verifyNumber = (a) => {
  if (a >= 10) {
    if (a <= 50) {
      return 'Da';
    }
  } 
  return 'Nu';
}
// logStuff(verifyNumber(5));
// logStuff(verifyNumber(12));
// logStuff(verifyNumber(65));
// logStuff(verifyNumber(50));

// Create an Object

const puppy = {
  name: 'Rex',
  age: 1,
  favouriteToys: ['Duck', 'Bone', 'Cat'],
  bark: function () {
    console.log('Ham!');
  }
};

const puppyWithSimpleFUnction = {
  name: 'Rex',
  age: 1,
  favouriteToys: ['Duck', 'Bone', 'Cat'],
  bark() {
    console.log('Ham!');
  }
};

puppy.bark();
// logStuff(puppy.name);
// logStuff(puppy.favouriteToys[0]);

const menu = {
  burger: 'Big Mac',
  juice: 'Cola',
  burgerType: 'Big',
  'french fries': 'With Salt'
};

const burgerType = 'burger';

// logStuff(menu.burger);
// logStuff(menu["french fries"]);
// logStuff(menu['burgerType']);
// logStuff(menu[burgerType]);

let smallNumber = 5;
// logStuff(smallNumber);
smallNumber = 7;
// logStuff(smallNumber);

menu.burger = ' Double Cheese';
// logStuff(menu.burger);

let myString = '';
let myNumber = 5;
// logStuff(myString + myNumber);
// logStuff(typeof (myString + myNumber));

let createString = (array) => {
  let newString = '';
  for (let index = 0; index < array.length; index++) {
    newString = newString + array[index];
  }
  return newString;
}


createString([3, '5', 7, 2, 1]); // '3572'
// logStuff(createString([3, '5', 7, 2])); // '12753'

function reverseString(array) {
  let reverseString = '';
  for (let index = array.length - 1; index >= 0; index--) {
    reverseString = reverseString + array[index];
  }
  return reverseString;
}

// logStuff(reverseString([3, '5', 7, 2]));

let myArray = [];
// console.log(myArray);
myArray.push(5);
myArray.push(3);
// console.log(myArray);

function reverseArray(array) {
  let myArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    myArray.push(array[index]);
  }
  return myArray;
}

// console.log(reverseArray([3, 4, 5, '6', 7]));

function createArray(max) {
  debugger;
  let myArray = []; 
  for (let i = 0; i <= max; i += 2 ) {
    myArray.push(i);
  }
  return myArray;
}

console.log(createArray(8));
console.log(createArray(11));


// Flip a coin
