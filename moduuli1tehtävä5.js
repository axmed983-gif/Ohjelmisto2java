let year = parseInt(prompt("Enter a year:"));

let isLeap;
if (year % 400 === 0) {
    isLeap = true;
} else if (year % 100 === 0) {
    isLeap = false;
} else if (year % 4 === 0) {
    isLeap = true;
} else {
    isLeap = false;
}

if (isLeap) {
    document.write(year + "is a leap year:");
} else {
    document.write(year + "is not a leap year:");
}