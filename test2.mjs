// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
// Einde van userInput voorbereiden

// Vraag om invoer van de gebruiker
let vraag1 = (await userInput.question('Mag u uw taal ingeven? (NL, FR, ENG) '));

// Definieer de welkomstberichten
let NL = "Welkom bij ons";
let FR = "Bienvenue chez nous";
let ENG = "Welcome by us";

// Verwijder spaties en maak de invoer hoofdletterongevoelig
vraag1 = vraag1.trim().toUpperCase();

// Vergelijk de invoer met de taalcodes
if (vraag1 === "NL") {
    console.log(NL);
} else if (vraag1 === "FR") {
    console.log(FR);
} else if (vraag1 === "ENG") {
    console.log(ENG);
} else {
    console.log("Het is niet een geldige taal");
}