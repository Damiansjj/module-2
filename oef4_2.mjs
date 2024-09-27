import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let artiest= parseFloat(await userInput.question("Kies een artiest? \n1.AC/DC\n2.Red hot chili peppers\n3.De Strangers\n4.Netsky \nGeef je keuze in? "))


    if (artiest == 1 ){
     console.log("Je koos voor AC/DC Ze zijn de artist achter de hit: Thunderstruck")}
    

    else if( artiest == 2)
    {console.log("Je koos voor Red hot chili pepper Ze zijn de artist achter de hit: Californication");}
        

    else if ( artiest== 3)
    {console.log("Je koos voor De Strangers Ze zijn de artist achter de hit: Mijnen blauwe geschelpte ");}
        

    else if( artiest == 4)
     {console.log("Je koos voor Netsky Ze zijn de artist achter de hit: Let Me Hold You ");}

    else console.log( "Ongeldige artiest")
        