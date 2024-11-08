window.onload = function () {
    const number = parseInt(prompt("Enter an integer:"), 10);

    if (isNaN(number) || number < 2) {
        document.getElementById("result").innerHTML = "Please enter an integer greater than 1.";
    } else {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            document.getElementById("result").innerHTML = `${number} is a prime number.`;
        } else {
            document.getElementById("result").innerHTML = `${number} is not a prime number.`;
        }
    }
}