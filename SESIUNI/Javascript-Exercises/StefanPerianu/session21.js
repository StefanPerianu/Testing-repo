let lightsOn = false;
let roomTemperature = 19;
let comfortTemperature = 22;
let outsideTemperature = 1;
let favouriteSong = "My heart will go on";
let courtains = false;
let tvOn = false;
let windowOpened = false;
let suggestedMovies = [];

function toggleLights() {
  lightsOn = !lightsOn;
  if (lightsOn) {
    console.log("Luminile au fost aprinse!");
  } else {
    console.log("Luminile au fost stinse!");
  }
}

function setTemperature() {
  checkTemperature();
  roomTemperature = comfortTemperature;
}

let checkTemperature = () => {
  if (outsideTemperature > 30) {
    comfortTemperature -= 2;
  } else if (outsideTemperature < 0) {
    comfortTemperature += 2;
  }
};

let toggleWindow = () => {
  windowOpened = !windowOpened;
};

let smoke = () => {
  toggleWindow();
  console.log("Smoking...");
  toggleWindow();
};

let doBath = () => {
  console.log("Bathing...");
};

let playSong = () => {
  console.log(`Playing ${favouriteSong}`);
};

let suggestMovie = (movie = "") => {
//   if (!movie.includes("2")) {
    suggestedMovies.push(movie);
//   }
};

let randomReview = () => {
    let reviewedMovied = suggestedMovies.map ((element) => {
        let rating = Math.random();
        return element+ " -> " + rating;
    });
    console.log(reviewedMovied);
}

toggleLights();
playSong();
setTemperature();
smoke();
setTemperature();
doBath();
toggleLights();
suggestMovie("Venom");
suggestMovie("Venom 2");
suggestMovie("Harry potter ");
suggestMovie("Harry potter 2");
suggestMovie("Lord Of The Rings");
console.log(suggestedMovies);
// randomReview();


let numbersArray = [2, 4, 91, 111, 567, 832, 3654]
console.log(numbersArray.sort());

let a = 0.1;
let b = 0.2;
let c = 0.3;
if (a + b === c) {
    console.log("Este adevarat");
} else {
    console.log("Nu este adevarat");
}

numbersArray = [1, 2, 3, 4, 3, 2, 1]

let checkPalindrom = () => {
for (let i = 0; i < numbersArray.length; i++){
        if (numbersArray[i] !== numbersArray[numbersArray.length -1 - i]) {
            return console.log('Arrayul nu este palindrom');
        }
    }
    console.log('Arrayul este palindrom');
}
checkPalindrom();

numbersArray = [2, 3, 5, 1, 7];

let reverseArray = () => {
    let reversedString = '';
    // for (let i = 0; i < numbersArray.length; i++){
    //     reversedString += numbersArray[numbersArray.length -1 - i]
    // }
    for (let i = numbersArray.length -1; i >= 0; i--) {
        reversedString += numbersArray[i]
    }
    return reversedString;
}
console.log(reverseArray());

function newFunction() {
    randomReview();
}

