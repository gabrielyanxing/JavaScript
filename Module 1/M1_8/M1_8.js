window.onload = function(){
    const startYear = parseInt(prompt("Enter the start year:"), 10);
    const endYear = parseInt(prompt("Enter the end year:"), 10);

    let leapYears = "";

    if (!isNaN(startYear) && !isNaN(endYear) && startYear <= endYear) {
        leapYears += "<ul>";

        for (let year = startYear; year <= endYear; year++) {
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                leapYears += `<li>${year}</li>`;
            }
        }

        leapYears += "</ul>";

        if (leapYears === "<ul></ul>") {
            leapYears = "<p>No leap years found in the specified range.</p>";
        }
    } else {
        leapYears = "<p>Please enter a valid start and end year.</p>";
    }

    document.getElementById("leapYearsList").innerHTML = leapYears;
}