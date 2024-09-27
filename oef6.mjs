import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let score = 0;
let vraag1= await userInput.question ('welkom bij de quiz \nVraag 1: Wat is de hoofdstad van Frankrijk? ');
if( vraag1 == 'parijs')
{console.log('Goed antwoord')
score++;   
}
else{console.log('fout antwoord \n het juiste antwoord was parijs')}

let vraag2= parseFloat (await userInput.question ('Vraag 2: Hoeveel planeten zijn er in ons zonnestelsel? '));
if( vraag2 ==8)
{console.log('Goed antwoord')
score++;   
}
else{console.log('fout antwoord \n het juiste antwoord was 8')}

let vraag3= await userInput.question ('Vraag 3: Wat is het grootste zoogdier ter wereld? ');
if( vraag3 == 'Blauwe vinvis')
{console.log('Goed antwoord')
score++;   
}
else{console.log('fout antwoord \n het juiste antwoord was Blauwe vinvis')}

let vraag4= await userInput.question ('Vraag 4: Wie schreef het toneelstuk Romeo en Julia? ');
if( vraag4 == 'Shakespeare')
{console.log('Goed antwoord')
score++;   
}
else{console.log('fout antwoord \n het juiste antwoord was Shakespeare')}

let vraag5= parseFloat(await userInput.question ('Vraag 5: Hoeveel poten heeft een spin? '));
if( vraag5 == 8)
{console.log('Goed antwoord')
score++;   
}
else{console.log('fout antwoord \n het juiste antwoord was 8')}

console.log('je hebt '+ score + ' van de 5 vragen die juist is beanwtwoord')
