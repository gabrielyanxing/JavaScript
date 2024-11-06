window.onload = function() {

    const shouldCalculate = confirm("Should I calculate the square root?");

    if (shouldCalculate) {
        const number = parseFloat(prompt("Enter a number:"));

        if (!isNaN(number) && number >= 0) {
            const squareRoot = Math.sqrt(number);
            document.getElementById("result").innerHTML = `The square root of ${number} is ${squareRoot}.`;
        } else {
            document.getElementById("result").innerHTML = "Please enter a valid non-negative number.";
        }
    } else {
        document.getElementById("result").innerHTML = "The square root is not calculated.";
    }
}
