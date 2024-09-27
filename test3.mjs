// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden


let tvserie = await userInput.question('Welke serie ');

let locatie;

switch(tvserie){
case 'The Simpson': 
locatie = 'Springfield';
console.log(tvserie+ " vindt plaats in " + locatie)
break;

default: console.log('Sorry, ik weet niet waar' + tvserie +  'zich afspeelt');}