
let dogs = [];


for (let i = 0; i < 6; i++) {
    let name = prompt("Anna 'koirien' nimet:");
    dogs.push(name);
}

dogs.sort().reverse();

let list = document.getElementById("dogList");


for (let dog of dogs) {
    let li = document.createElement("li");
    li.textContent = dog;
    list.appendChild(li);
}
