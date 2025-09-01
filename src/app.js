import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



const card = document.querySelector('#card');


const displayCardUp = (str, colorClass) => {
  const text = document.createElement('p');
  text.innerHTML = str;
  text.classList.add('py-5', 'mx-3', 'text-start', colorClass);
  card.appendChild(text);
};

const displayCardCenter = (str, colorClass) => {
  const text = document.createElement('p');
  text.innerHTML = str;
  text.classList.add('py-5', 'mx-3', 'text-center', colorClass);
  card.appendChild(text);
};

const displayCardDown = (str, colorClass) => {
  const text = document.createElement('p');
  text.innerHTML = str;
  text.classList.add('py-5', 'mx-3', colorClass);
  text.style.transform = 'rotate(180deg)'; // girar 180°
  card.appendChild(text);
};


const deck = ['♦', '♥', '♠', '♣'];
const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
const getRandomValue = (arr) => arr[getRandomIndex(arr)];





window.onload = function () {

  
  const decks = getRandomValue(deck);
  const number = getRandomValue(numbers);


  const colorClass = (decks === '♥' || decks === '♦') ? 'text-danger' : 'text-dark';

  // Mostrar carta
  displayCardUp(decks, colorClass);
  displayCardCenter(number, colorClass);
  displayCardDown(decks, colorClass);
};
