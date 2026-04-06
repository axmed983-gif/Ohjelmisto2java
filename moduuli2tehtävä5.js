const readline = require('readline-sync');

let numbers = [];

while (true) {
    let input = readline.question("Anna numero: ");
    let num = Number(input);

    if (isNaN(num)) {
        console.log("Et antanut numeroa, yritä uudestaan.");
        continue;
    }


    if (numbers.includes(num)) {
        console.log("Numero on jo annettu. Ohjelma lopetetaan.");
        break;
    }

    numbers.push(num);
}

numbers.sort((a, b) => a - b);

console.log("Annetut numerot nousevassa järjestyksessä:");
for (let number of numbers) {
    console.log(number);
}