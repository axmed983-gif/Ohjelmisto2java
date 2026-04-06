let numbers = [];
let input;

do {
    input = prompt('Anna luku (0 lopettaa):');
    const num = Number(input);

    if (!isNaN(num) && num !== 0) {
        numbers.push(num);
    } else if (isNaN(num)) {
        console.log('Syötä kelvollinen numero.');
    }
} while (input !== '0');

numbers.sort((a, b) => b - a);

console.log('Luvut suurimmasta pienimpään:');
console.log(numbers.join(', '));