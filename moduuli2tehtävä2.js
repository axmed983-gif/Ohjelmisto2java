
let count = parseInt(prompt("Anna osallistujien määrä:"));


let participants = [];

for (let i = 0; i < count; i++) {
    let name = prompt("Anna osallistujan nimi:");
    participants.push(name);
}

participants.sort();

let list = document.getElementById("participantList");

for (let name of participants) {
    let li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
}