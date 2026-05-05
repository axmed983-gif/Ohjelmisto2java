const target = document.getElementById("target");

const students = [
  { value: "2345768", name: "John" },
  { value: "2134657", name: "Paul" },
  { value: "5423679", name: "Jones" }
];

for (let i = 0; i < students.length; i++) {
  const option = document.createElement("option");

  option.value = students[i].value;
  option.textContent = students[i].name;

  target.appendChild(option);
}