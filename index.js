'use strict'


const bgColorsArr = ['#0b223f', '#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51', '#606C38', '#283618', '#BC6C25'];
let bgColor;
const apiUrl = 'https://api.thecatapi.com/v1/images/search';


function colorRandomizer() {
bgColor = bgColorsArr[Math.floor(Math.random() * 8)];
}