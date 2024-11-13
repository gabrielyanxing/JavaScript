function getDogNames() {
    const dogNames = [];

    for (let i = 0; i < 6; i++) {
        const name = prompt(`Enter the name of dog ${i + 1}:`);
        if (name) {
            dogNames.push(name);
        } else {
            alert("Name cannot be empty. Please enter a valid name.");
            i--;
        }
    }

    dogNames.sort().reverse();

    let htmlContent = "<ul>";
    dogNames.forEach(name => {
        htmlContent += `<li>${name}</li>`;
    });
    htmlContent += "</ul>";

    document.getElementById("dogNamesList").innerHTML = htmlContent;
}