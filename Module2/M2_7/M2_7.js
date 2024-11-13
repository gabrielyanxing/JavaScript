function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function startRolling() {
    const sides = parseInt(prompt("Enter the number of sides on the dice:"));

    if (isNaN(sides) || sides < 1) {
        alert("Please enter a valid number of sides.");
        return;
    }

    const rolls = [];
    let roll;

    do {
        roll = rollDice(sides);
        rolls.push(roll);
    } while (roll !== sides);

    let htmlContent = "<ul>";
    rolls.forEach(roll => {
        htmlContent += `<li>${roll}</li>`;
    });
    htmlContent += "</ul>";

    document.getElementById("result").innerHTML = htmlContent;

    console.log("Dice rolls:", rolls);
}