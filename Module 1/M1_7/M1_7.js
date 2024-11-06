window.onload = function() {
    const numOfRolls = parseInt(prompt("Enter the number of dice rolls:"), 10);

    let sum = 0;

    if (!isNaN(numOfRolls) && numOfRolls > 0) {

        for (let i = 0; i < numOfRolls; i++) {

            const roll = Math.floor(Math.random() * 6) + 1;
            sum += roll;
        }

        document.getElementById("result").innerHTML = `The sum of ${numOfRolls} dice rolls is ${sum}.`;
    } else {

        document.getElementById("result").innerHTML = "Please enter a valid positive integer for the number of dice rolls.";
    }
}