function getNumbers() {
    const numbers = [];
    let number;

    while (true) {
        number = parseInt(prompt("Enter a number (enter 0 to stop):"));

        if (number === 0) {
            break;
        }

        numbers.push(number);
    }

    numbers.sort((a, b) => b - a);

    let htmlContent = "<ul>";
    numbers.forEach(num => {
        htmlContent += `<li>${num}</li>`;
    });
    htmlContent += "</ul>";

    document.getElementById("result").innerHTML = htmlContent;

    console.log("Sorted Numbers (Descending):", numbers);
}