function rollDice() {
    const rolls = [];

    while (true) {
        const roll = Math.floor(Math.random() * 6) + 1;
        rolls.push(roll);

        if (roll === 6) {
            break;
        }
    }

    let htmlContent = "<ul>";
    rolls.forEach(roll => {
        htmlContent += `<li>${roll}</li>`;
    });
    htmlContent += "</ul>";

    document.getElementById("result").innerHTML = htmlContent;

    console.log("Dice rolls:", rolls);
}