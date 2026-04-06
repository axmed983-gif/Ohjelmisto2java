const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
let count = 0;

function askNumber() {
    if (count < 5) {
        rl.question("Enter number: ", (answer) => {
            numbers.push(Number(answer));
            count++;
            askNumber();
        });
    } else {
        console.log("Numbers in reverse order:");

        for (let i = numbers.length - 1; i >= 0; i--) {
            console.log(numbers[i]);
        }

        rl.close();
    }
}

askNumber();