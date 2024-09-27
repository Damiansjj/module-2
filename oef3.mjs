import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand= await userInput.question('Geef een maand? ')

switch(maand){
    case "januari":
        console.log("31 dagen")
        break;}

switch(maand){
    case "februari":
         console.log("28 dagen")
         break;}
switch(maand){
    case "maart":
            console.log("31 dagen")
            break;}
switch(maand){
    case "april":
        console.log("30 dagen")
        break;}
switch(maand){
    case "mei":
        console.log("31 dagen")
        break;}
switch(maand){
    case "juni":
        console.log("30 dagen")
        break;}
switch(maand){
    case "juli":
        console.log("31 dagen")
        break;}
switch(maand){
    case "augustus":
        console.log("31 dagen")
        break;}
switch(maand){
    case "september":
    console.log("30 dagen")
        break;}
switch(maand){
    case "oktober":
    console.log("31 dagen")
        break;}
switch(maand){
    case "november":
    console.log("30 dagen")
        break;}
switch(maand){
    case "december":
    console.log("31 dagen")
        break;}