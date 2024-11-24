'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const targetElement = document.getElementById("target");

for (const student of students) {
  const optionElement = document.createElement("option");
  optionElement.value = student.id;
  optionElement.textContent = student.name;
  targetElement.appendChild(optionElement);
}