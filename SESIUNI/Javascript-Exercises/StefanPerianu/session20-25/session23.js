/**
 * Add or remove classes
 */

const demoDiv = document.querySelector('#testDiv');
// demoDiv.style.backgroundColor = 'yellow';

console.log(demoDiv);
console.dir(demoDiv);
demoDiv.className = 'red';
demoDiv.classList.add('blue');
demoDiv.classList.remove('blue');

/**
 * Get or Set attributes
 */

const demoImg = document.getElementById('timisoara');
console.dir(demoImg);
const imgSrc = demoImg.getAttribute('src');
console.log(imgSrc);
const newImg = document.getElementById('newImage');
newImg.setAttribute('src', imgSrc);

/**
 * Event Listeners
 */

const unList = document.querySelector('ul');
// unList.addEventListener('click', () => {
//     unList.classList.toggle('blue');
// });

const toggleListItems = function () {
    let toggleValue = this.classList.toggle('red');
    console.log(toggleValue);
    // if (toggleValue === true)
    if (toggleValue) {
        let span = document.createElement('span');
        span.innerHTML = 'x';
        this.appendChild(span);
    } else {
        this.getElementsByTagName('span')[0].remove();
        this.remove();
    }
}

let listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
    let listItem = listItems[i];
    listItem.addEventListener('click', toggleListItems);
    // listItem.addEventListener('mouseover',function ()  {
    //     this.classList.add('blue');
    // })
    // listItem.addEventListener('mouseout', function () {
    //     this.classList.remove('blue');
    // })
}

const demoInput = document.querySelector('input[name="demoInput"]');
demoInput.addEventListener('keypress', (event) => {
    if (event.keyCode === 13 && demoInput.value.length > 3) {
        // console.log('Ai terminat terminat de scris si vrei sa salvezi cu succes');
        // alert('Ai terminat terminat de scris si vrei sa salvezi cu succes');
        demoInput.style.backgroundColor = 'green';
        console.log(demoInput.value);
        console.log(demoInput.value.length);
    }
})

/**
 * Create HTML element
 */

const clickedDiv = document.getElementById('clickMe');
clickedDiv.addEventListener('click', function ()  {
    const newListItem = document.createElement('li');
    newListItem.addEventListener('click', toggleListItems);
    // newListItem.addEventListener('mouseover',function ()  {
    //     this.classList.add('blue');
    // })
    // newListItem.addEventListener('mouseout', function () {
    //     this.classList.remove('blue');
    // })
    listItems = document.querySelectorAll('li');

    if (demoInput.value) {
        newListItem.innerHTML = demoInput.value;
        demoInput.value = '';
    } else {
        newListItem.innerHTML = 'Elem ' + (listItems.length + 1);
    }
    
    unList.appendChild(newListItem);
})

/**
 * Remove HTML element => vezi linia 34
 */



/**
 *  Function return example
 */

function createElement (tagName, value) {
    const element = document.createElement(tagName);
    element.innerHTML = value;
    return element;
}

const newLI = createElement('li', 'This is added with a function');
unList.appendChild(newLI);