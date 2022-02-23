/**
 * RegExp - Regular expression
 * tipare care cauta combinatii de caractere in stringuri
 */

let string = 'abcdef';
let pattern = /ab/;
console.log(pattern.exec(string));
console.log(pattern.test(string));
console.log(string.match(pattern));

const submitBtn = document.querySelector('#login');
const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');
const error = document.querySelector('#error');

const validateEmail = (email, regex) => {
    // return emailValue.match(regex);
    if (email.match(regex)) {
        // returnam true daca adresa este valida
        return true;
    } else {
        //  return false daca adresa este invalida
        return false
    }
}

const validatePassword = (password) => {
    return password === 'password';
}

submitBtn.addEventListener('click', function (event) {
    event.preventDefault(); // anulam submitul predefinit
    const regex = /\D{4,}\@\D{4,}\.\D{2,}/g;
    const emailValue = emailField.value;
    const passwordValue = passwordField.value;

    if (emailValue === '' || passwordValue === '') {
        error.style.display = 'block';
        error.innerHTML = 'All fields are required and must have a value!';
    } else {
        if (validateEmail(emailValue, regex) && validatePassword(passwordValue)) {
            // alert('Logged in');
            confirm('Do you want to learn more?');
        } else {
            // alert('Invalid user or email');
            console.log(prompt('Enter a value'));
            emailField.value = '';
            passwordField.value = '';
        }
    }
});

let variabila = 'asd';
let oNouaVariabila = 'o noua variabila';
function test(variabila) {
    variabila = 'ceva';
    console.log(variabila);
}
test(oNouaVariabila);
console.log(variabila);
console.log(oNouaVariabila);

const firstNameField = document.getElementById('firstName');
const lastNameField = document.getElementById('lastName');
const ageField = document.getElementById('age');

const firstName = 'Angelina';
const lastName = 'Jolie';
const age = 27;

/**
 * Built in functions
 */

setTimeout( () => {
    // firstNameField.value = firstName;
    // lastNameField.value = lastName;
    // ageField.value = age;
}, 2000);

// Another way to use callbacks (functions used as params)

// setTimeout( function () {
    
// }, 2000);

// setTimeout(timeoutFunction, 2000);

// function timeoutFunction () {

// }

let start = 1;
let interval = setInterval( () => {
    console.log(start);
    start += 1;
    if (start === 7) {
        if (firstNameField.value === '' || lastNameField.value === '' || ageField.value === '') {
            firstNameField.value = firstName;
            lastNameField.value = lastName;
            ageField.value = age;
        }
        clearInterval(interval);
    }
}, 1000);

/**
 * JSON Javascript object notation
 */