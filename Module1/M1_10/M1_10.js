window.onload = function(){
    const numberOfDice = parseInt(prompt("Enter the number of dice:"), 10);
    const targetSum = parseInt(prompt("Enter the target sum of the dice:"), 10);

    if (isNaN(numberOfDice) || isNaN(targetSum) || numberOfDice < 1) {
        document.getElementById("result").innerHTML = "Please enter valid numbers for the number of dice and target sum.";
    } else {
        const simulations = 10000;
        let successfulRolls = 0;

        for (let i = 0; i < simulations; i++) {
            let sum = 0;

            for (let j = 0; j < numberOfDice; j++) {
                const roll = Math.floor(Math.random() * 6) + 1;
                sum += roll;
            }

            if (sum === targetSum) {
                successfulRolls++;
            }
        }

        const probability = (successfulRolls / simulations) * 100;
        document.getElementById("result").innerHTML =
            `Probability to get sum ${targetSum} with ${numberOfDice} dice is ${probability.toFixed(2)}%.`;
    }
}