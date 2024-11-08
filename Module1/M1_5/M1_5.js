window.onload = function() {

    const year = parseInt(prompt("Enter a year:"), 10);

    let isLeapYear;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }

    if (isLeapYear) {
        document.getElementById("result").innerHTML = `${year} is a leap year.`;
    } else {
        document.getElementById("result").innerHTML = `${year} is not a leap year.`;
    }
}
