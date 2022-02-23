// CRUD SERVICES
/**
 * CREATE
 * READ
 * UPDATE
 * DELETE
 */

// HTTP METHODS
/**
 * GET
 * POST
 * PUT
 * DELETE
 */

// fetch('https://reqres.in/api/users/2')
// .then( (result) => {
//     return result.json();
// })
// .then( (data) => {
//     console.log(data);
// })
// .catch( (error) => {
//     console.log(error);
// });

// function fetchSomething(param) {
//     return param + 'aaaaa';
// }
// function doSomething (param) {
//     return param + 'bbb';
// }
// const fetched = fetchSomething('Sergiu');
// doSomething(fetched);

// let singleUser = {};
// fetch("https://reqres.in/api/users/2")
//   .then((response) => {
//     return response.json();
//   })
//   .then((dataaa) => {
//     singleUser = dataaa.data;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/**
 * Code for login in our application
 */

const submitBtn = document.querySelector("#submitButton");
const emailField = document.querySelector("#user");
const passwordField = document.querySelector("#pass");
const logInUrl = 'https://reqres.in/api/login';

let authToken = '';

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
    return password === 'cityslicka';
}

async function logIn(data) {
    const response = await fetch(logInUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json(); 
};

submitBtn.addEventListener('click', function (event) {
    event.preventDefault(); // anulam submitul predefinit
    const regex = /\D{4,}\@\D{4,}\.\D{2,}/g;
    const emailValue = emailField.value;
    const passwordValue = passwordField.value;

    if (emailValue === '' || passwordValue === '') {
        console.log('Error');
    } else {
        if (validateEmail(emailValue, regex) && validatePassword(passwordValue)) {
            const loginCredentials = {
                email: emailValue,
                password: passwordValue
            }
            logIn(loginCredentials)
            .then( (response) => {
                authToken = response.token;
            });
        } else {
            // alert('Invalid user or email');
            console.log(prompt('Enter a value'));
            emailField.value = '';
            passwordField.value = '';
        }
    }
});
