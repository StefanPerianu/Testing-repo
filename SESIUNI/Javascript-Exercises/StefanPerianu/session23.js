const demoDiv = document.querySelector('.testDiv')
// demoDiv.style.backgroundColor = 'yellow';
demoDiv.className = 'red';
demoDiv.classList.add('blue');
demoDiv.classList.remove('blue');


const demoImg = document.getElementById('timisoara');
console.dir(demoImg);
const imgSrc = demoImg.getAttribute('src');
console.dir(imgSrc);
const newImg = document.getElementById('newImg')
newImg.setAttribute('src', imgSrc)


const unList = document.querySelector('ul');
// unList.addEventListener('click', () => {
//     unList.classList.toggle('blue');
// })

const toggleListItems = function () {
    this.classList.toggle('red');
}

let listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
    let listItem = listItems[i];
    listItem.addEventListener('click', toggleListItems);
    listItem.addEventListener('mouseover',function () {
        this.classList.add('blue');
    })
    listItem.addEventListener('mouseout',function () {
        this.classList.remove('blue');
    })
}

const demoInput = document.querySelector('input[name="demoInput"]');
demoInput.addEventListener('keypress', (event) => {
    if (event.keyCode === 13 && demoInput.value.length) {
        // console.log('Ai terminat de scris si vrei sa salvezi cu succes');
        // alert('Ai terminat de scris si vrei sa salvezi cu succes');
        demoInput.style.backgroundColor = 'green'
        console.log(demoInput.value);
        console.log(demoInput.value.length);
    }
})


const clickedDiv = document.getElementById('clickMe')
clickedDiv.addEventListener('click', function () {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = 'Elem' + (listItems.length +1);
    unList.appendChild(newListItem);
})