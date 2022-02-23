let numbersOfLikes;
let isLiked = false;
function toggleLikes() {
  numberOfLikesElement.innerHTML = isLiked
    ? ++numbersOfLikes
    : --numbersOfLikes; // ternary operator. la fel ca if-ul de mai jos
  // if(isLiked) {
  //     numberOfLikesElement.innerHTML = '1';
  // } else {
  //     numberOfLikesElement.innerHTML = '0';
  // }
  setNumberOfLIkes(numbersOfLikes); // POST method
}

function getNumberOfLikes() {
 return numbersOfLikes = numbersOfLikes || 17;
}

function setNumberOfLIkes(number) {
  numbersOfLikes = number;
}

const numberOfLikesElement = document.getElementById("likesCount");
const likesIcon = document.getElementById("likesIcon");
getNumberOfLikes();
numberOfLikesElement.innerHTML = numbersOfLikes;

const likesButton = document.getElementsByClassName("likeReaction");
likesButton[0].addEventListener("click", function (event) {
  isLiked = !isLiked;
  likesIcon.classList.toggle("active");
  toggleLikes();
});

let ceva ;
// Valori false
ceva = undefined;
ceva = null;
ceva = 0;
ceva = [];
ceva = {};
ceva = false;

// Valori adevarate
ceva = 5;
ceva = 'adsfs';
ceva = [1];
ceva = {name: 's'};
ceva = true;
ceva = NaN;

if(!ceva) {
    console.log('E adevarat');
} else {
    console.log('Nu e adevarat');
}