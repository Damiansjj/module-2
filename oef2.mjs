import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let min = 1
let max = 100

let nummer = parseFloat(await userInput.question('Geef een nummer '));

if (nummer >= min && nummer <= max){

console.log( "het nummer ligt tussen " + min + "en " + max)}

else 
console.log( 'het nummer ligt niet tussen '+ min  + " en " + max)
