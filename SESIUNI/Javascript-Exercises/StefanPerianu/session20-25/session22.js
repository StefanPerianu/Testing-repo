/**
 * Test object for demo
 */
const example = {
    title: 'Example object',
    sayHi() {
        console.log(`Hey there`);
    }
}

console.log(example.title);
example.sayHi();
example.title = 'Another example';
console.log(example.title);

/**
 * Method to get element by any selector
 */

const redSquare = document.querySelector('.redSquare'); // Returneaza primul element pe care il gaseste
console.log(redSquare);
redSquare.style.backgroundColor = 'green';
// css background-color => js backgroundColor
// css padding-left => js paddingLeft

const blueSquares = document.querySelectorAll('.blueSquare');
// const blueSquares = document.querySelectorAll('#blueSquare');
// const blueSquares = document.querySelectorAll('blueSquare');
console.log(blueSquares);
blueSquares[0].style.backgroundColor = 'yellow';
blueSquares[1].style.backgroundColor = 'yellow';
blueSquares[2].style.backgroundColor = 'yellow';

for (let i = 0; i < blueSquares.length; i++) {
    const blueSquare = blueSquares[i];
    blueSquare.style.backgroundColor = 'yellow';
}

/**
 * Method to get element by id
 */

const changedListJs = document.getElementById('changedList');
console.log(changedListJs);
changedListJs.style.border = '1px solid black';

const changeListArray = document.querySelectorAll('.changeThis');
for (let i = 0; i < changeListArray.length; i++) {
    const currentElement = changeListArray[i];
    currentElement.innerHTML = `${i + 1} element changed by Javascript`;
}

const paragraph = document.getElementsByTagName('p');
paragraph[0].innerHTML = 'This text was added later with JS';
paragraph[1].style.textTransform = 'uppercase';

/**
 * Method to get element by it's class name
 */


const styledMessages = document.getElementsByClassName('styledMessages');
const spanTagName = styledMessages[0].tagName;
styledMessages[0].innerHTML = `This message was in a ${spanTagName} element and was change by JS`;
styledMessages[1].innerHTML = `This message was in a ${styledMessages[1].tagName} element and was change by JS`;

/**
 * Example Function
 */

const exampleFunction = () => {
    console.log('Ceva');
    console.log('Altceva');
    console.log('Inca ceva');
}

exampleFunction();

const greenBox = document.querySelector('.greenBox');

function changeGreenBox() {
    greenBox.style.backgroundColor = 'pink';
}

function focusInput () {
    greenBox.style.backgroundColor = 'red';
    document.getElementsByName('label').innerHTML = 'Changed by focus';
}

function blurInput() {
    greenBox.style.backgroundColor = 'black';
}

function mouseEnter() {
    greenBox.style.backgroundColor = 'purple';
}

function mouseLeave() {
    // greenBox.style.color = 'white';
    greenBox.style.backgroundColor = 'white';
    greenBox.style.border = '1px solid black';
    greenBox.innerText = 'black';
}

function onKeyDown() {
    greenBox.style.backgroundColor = 'salmon';
}

function onKeyUp() {
    greenBox.style.backgroundColor = 'lightgreen';
}

function onKeyPress() {
    greenBox.style.backgroundColor = 'red';
}

