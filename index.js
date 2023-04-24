//"use strict";

const calc = require("./calc");
const axios = require("axios");
const pokemon = require("./pokemon");

console.log("Hello World");

a = 10;

b = 5;

console.log(calc.add(a, b));
console.log(calc.subtract(a, b));
console.log(calc.multiply(a, b));
console.log(calc.divide(a, b));

const { add, subtract, multiply, divide } = require("./calc");

console.log("Trying the other way");
console.log(add(2, 2));
console.log(subtract(2, 2));
console.log(multiply(2, 2));
console.log(divide(2, 2));

pokemon.getPokemon().then(({data}) => console.log("Fav: ", data));