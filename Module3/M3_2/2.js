const targetElement = document.getElementById("target");

const firstItem = document.createElement("li");
firstItem.textContent = "First item";
targetElement.appendChild(firstItem);

const secondItem = document.createElement("li");
secondItem.textContent = "Second item";
secondItem.classList.add("my-item");
targetElement.appendChild(secondItem);

const thirdItem = document.createElement("li");
thirdItem.textContent = "Third item";
targetElement.appendChild(thirdItem);