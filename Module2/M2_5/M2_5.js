function getNumbers() {
    const numbers = [];

    while (true) {
        const userInput = prompt("Enter a number:");

        if (userInput === null || userInput.trim() === "") {
            alert("Please enter a valid number.");
            continue;
        }

        const num = Number(userInput);

        if (isNaN(num)) {
            alert("That's not a number, please enter a valid number.");
            continue;
        }

        if (numbers.includes(num)) {
            alert("This number has already been entered. Stopping the input.");
            break;
        }

        numbers.push(num);
    }

    numbers.sort((a, b) => a - b);

    let htmlContent = "<ul>";
    numbers.forEach(num => {
        htmlContent += `<li>${num}</li>`;
    });
    htmlContent += "</ul>";

    document.getElementById("result").innerHTML = htmlContent;

    console.log("Sorted Numbers (Ascending):", numbers);
}