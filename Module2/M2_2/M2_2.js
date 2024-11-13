function getParticipants() {

    const numParticipants = parseInt(prompt("Enter the number of participants:"));

    if (isNaN(numParticipants) || numParticipants <= 0) {
        alert("Please enter a valid number.");
        return;
    }

    const participants = [];

    for (let i = 0; i < numParticipants; i++) {
        const name = prompt(`Enter the name of participant ${i + 1}:`);
        if (name) {
            participants.push(name);
        } else {
            alert("Name cannot be empty. Please enter a valid name.");
            i--; // Repeat this prompt if no name is entered
        }
    }

    participants.sort();

    let htmlContent = "<ol>";
    participants.forEach(name => {
        htmlContent += `<li>${name}</li>`;
    });
    htmlContent += "</ol>";

    document.getElementById("participantsList").innerHTML = htmlContent;
}