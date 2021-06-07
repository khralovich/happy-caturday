'use strict'


const bgColorsArr = ['#0b223f', '#264653', '#296b63', '#E9C46A', '#cc874e', '#E76F51', '#606C38', '#283618', '#BC6C25'];
const apiUrl = 'https://api.thecatapi.com/v1/images/search';
const catPhoto = document.querySelector('#kitty-img');
const catQuote = document.querySelector('#quote');
const author = document.querySelector('#author');

function colorRandomizer() {
return document.body.style.backgroundColor  = bgColorsArr[Math.floor(Math.random() * 8)];
}

async function quoteRandomizer() {
    const resp = await fetch('/quotes.json')
  .then(resp => resp.json());
  const randomNumber = Math.floor(Math.random() * 12);
  console.log(Object.keys(resp)[randomNumber]);
  console.log(Object.values(resp)[randomNumber]);
}

async function getACat(url) {
    const response = await fetch(url);
     let data = await response.json();
     return catPhoto.src = data[0].url;
}

quoteRandomizer();
colorRandomizer();
getACat(apiUrl);



