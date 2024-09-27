import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1= parseFloat (await userInput.question ('Geef een getal 1? '));
let getal2= parseFloat (await userInput.question ('Geef een getal 2? '));
let getal3= parseFloat (await userInput.question ('Geef een getal 3? '));
let getal4= parseFloat (await userInput.question ('Geef een getal 4? '));
let getal5= parseFloat (await userInput.question ('Geef een getal 5? '));

let gemiddelde = (getal1 + getal2 + getal3 + getal4 + getal5) /5;

if (getal1 > getal2 && getal1>getal3 && getal1 > getal4 && getal1 > getal5)
{console.log("het hoogste getalis " + getal1)}

else if (getal2 > getal1 && getal2 >getal3 && getal2 > getal4 && getal2 > getal5)
{console.log("het hoogste getalis " + getal2)}

else if (getal3 > getal1 && getal3 > getal2 && getal3 > getal4 && getal3 > getal5)
{console.log("het hoogste getalis " + getal3)}

else if (getal4 > getal1 && getal4 > getal2 && getal4 > getal3 && getal4 > getal5)
{console.log("het hoogste getalis " + getal4)}

else if(getal5 > getal1 && getal5 > getal2 && getal5 > getal3 && getal5 > getal4)
{console.log("het hoogste getalis " + getal5)}



if (getal1 < getal2 && getal1 < getal3 && getal1 < getal4 && getal1 < getal5)
    {console.log("het laagste getal is " + getal1)}
    
    else if (getal2 < getal1 && getal2 < getal3 && getal2 < getal4 && getal2 < getal5)
    {console.log("het laagste getal is " + getal2)}
    
    else if (getal3 < getal1 && getal3 < getal2 && getal3 < getal4 && getal3 < getal5)
    {console.log("het laagste getal is " + getal3)}
    
    else if (getal4 < getal1 && getal4 < getal2 && getal4 < getal3 && getal4 < getal5)
    {console.log("het laagste getal is " + getal4)}
    
    else if(getal5 < getal1 && getal5 < getal2 && getal5 < getal3 && getal5 < getal4)
    {console.log("het laagste getal is " + getal5)}

    console.log( "het gemiddelde is " + gemiddelde)