/**
 * Preluarea fieldurilor care ne intereseaza
 */

const nameField = document.getElementById('fullName');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const subjectField = document.getElementById('subject');
const messageField = document.getElementById('message');
const submitButton = document.getElementById('submit');
const error = document.querySelector('#errorMessage');

function showError () {
    error.style.display = 'block';
    error.innerHTML = 'All fields are required and must have a value!';
}

function hideError() {
    if (error.style.display = 'block') {
        error.style.display = 'none';
    }
}

function showResult () {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.style.display = 'block';
    resultContainer.style.backgroundColor = 'lightgreen';

    const nameResult = document.getElementById('nameResult');
    nameResult.innerHTML = nameField.value;

    const emailResult = document.getElementById('emailResult');
    emailResult.innerHTML = emailField.value;

    const phoneResult = document.getElementById('phoneResult');
    phoneResult.innerHTML = phoneField.value;

    const messageToDisplay = document.getElementById('messageResult');
    messageToDisplay.innerHTML = messageField.value;
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (nameField.value === '' || !emailField.value || !phoneField.value  || !messageField.value) {
        showError();
    } else {
        hideError();
        showResult();
    }
});

