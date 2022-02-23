const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const submitButton = document.getElementById('submit');
const error = document.querySelector('#errorMessage');

function showError () {
    error.style.display = 'block';
    error.innerHTML = 'Toate campurile trebuiesc completate !';
}

function hideError() {
    if (error.style.display = 'block') {
        error.style.display = 'none';
    }
}

function showResult () {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.style.display = 'block';
    resultContainer.style.backgroundColor = 'lightblue';

    const nameResult = document.getElementById('nameResult');
    nameResult.innerHTML = nameField.value;

    const emailResult = document.getElementById('emailResult');
    emailResult.innerHTML = emailField.value;

    const phoneResult = document.getElementById('phoneResult');
    phoneResult.innerHTML = phoneField.value;
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (nameField.value === '' || !emailField.value || !phoneField.value) {
        showError();
    } else {
        hideError();
        showResult();
    }
});

