
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let nummer = parseFloat(await userInput.question('Geef een nummer in '));
let nummer2 = parseFloat(await userInput.question('Geef een nummer in '));

if (nummer > 0 && nummer2 > 0) {
    console.log('Beide getallen zijn positief.');
} else if (nummer < 0 && nummer2 < 0) {
    console.log('Beide getallen zijn negatief.');
} else if (nummer < 0 && nummer2 > 0) {
    console.log('Het eerste getal is negatief en het tweede getal is positief.');
} else if (nummer > 0 && nummer2 < 0) {
    console.log('Het eerste getal is positief en het tweede getal is negatief.');
} else if (nummer == 0 || nummer2 == 0) {
    console.log('Een van de getallen is nul.');
}
