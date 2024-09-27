import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let weekdag= await userInput.question('Geef een dag? ')

switch(weekdag){
    case "maandag":
        console.log("weekdag")
        break;}

 switch(weekdag){
     case "dinsdag":
         console.log("weekdag")
         break;}
 switch(weekdag){
     case "woensdag":
            console.log("weekdag")
            break;}
 switch(weekdag){
    case "donderdag":
        console.log("weekdag")
        break;}
switch(weekdag){
         case "vrijdag":
        console.log("weekdag")
        break;}
switch(weekdag){
        case "zaterdag":
        console.log("weekend")
        break;}
 switch(weekdag){
        case "zondag":
          console.log("weekend")
            break;}