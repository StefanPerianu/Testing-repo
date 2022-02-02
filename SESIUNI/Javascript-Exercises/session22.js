// Test object for demo

const example = {
  title: "Example object",
  sayHi() {
    console.log(`Hey there`);
  },
};

console.log(example.title);
example.sayHi();
example.title = "Another example";
console.log(example.title);

const redSquare = document.querySelector(".redSquare"); //Returneaza primul element pe care il gaseste
console.log(redSquare);
redSquare.style.backgroundColor = "green";

const blueSquares = document.querySelectorAll(".blueSquare");
// const blueSquares = document.querySelectorAll('#blueSquare');
// const blueSquares = document.querySelectorAll('blueSquare');
console.log(blueSquares);
blueSquares[0].style.backgroundColor = "yellow";

for (let i = 0; i < blueSquares.length; i++) {
  const blueSquare = blueSquares[i];
  blueSquare.style.backgroundColor = "yellow";
}



const changedListJs = document.getElementById("changedList");
console.log(changedListJs);
changedListJs.style.border = "1px solid black";

const changedListArray = document.querySelectorAll(".changeThis");
for (let i = 0; i < changedListArray.length; i++) {
  const currentElement = changedListArray[i];
  currentElement.innerHTML = `${i + 1} element changed by Js`;
}

const paragraph = document.getElementsByTagName('p');
paragraph[0].innerHTML = 'This text wass added later with Js'
paragraph[0].style.textTransform = 'uppercase';

const styledMessages = document.getElementsByClassName('styledMessages');
styledMessages[0].innerHTML = `This message was in a ${styledMessages[0].tagName} element and was change by Js`;
styledMessages[0].innerHTML = `This message was in a ${styledMessages[1].tagName} element and was change by Js`;

// Example Function


const exampleFunction = () => {
    console.log('Ceva');
    console.log('Altceva');
    console.log('Inca Ceva');
}

exampleFunction();

const greenBox = document.querySelector('.greenBox');

function changeGreenBox() {
    greenBox.style.backgroundColor = 'pink';
}

function focusInput() {
    greenBox.style.backgroundColor = 'red';
    document.getElementsByTagName('label').innerHTML = 'Changed by focus';
}

function blurInput() {
    greenBox.style.backgroundColor = 'black';
}

function mouseEnter() {
    greenBox.style.backgroundColor = 'purple';

}

function mouseLeave() {
    greenBox.innerHTML = 'black';
    greenBox.style.color = 'white';

}

function onKeyDown () {
    greenBox.style.backgroundColor = 'salmon';
}

function onKeyUp () {
    greenBox.style.backgroundColor = 'lightgreen';
}

function onKeyPress () {
    greenBox.style.backgroundColor = 'red';

}