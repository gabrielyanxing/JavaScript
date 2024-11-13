function promptNumbers() {
    const numbers = [];

    // Prompt user to input five numbers
    for (let i = 0; i < 5; i++) {
        const userInput = prompt(`Enter number ${i + 1}:`);
        const num = Number(userInput);

        if (!isNaN(num)) {
            numbers.push(num);
        } else {
            alert("Please enter a valid number.");
            i--;
        }
    }

    console.log("Numbers in reverse order:");
    for (let i = numbers.length - 1; i >= 0; i--) {
        console.log(numbers[i]);
    }
}