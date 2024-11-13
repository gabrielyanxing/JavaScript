document.getElementById("startButton").addEventListener("click", startVoting);

function startVoting() {
    let candidates = [];
    let votersCount = 0;
    let resultsDiv = document.getElementById("results");

    let numCandidates = parseInt(prompt("Enter the number of candidates:"));
    if (isNaN(numCandidates) || numCandidates <= 0) {
        alert("Invalid number of candidates.");
        return;
    }

    for (let i = 0; i < numCandidates; i++) {
        let name = prompt(`Enter the name of candidate ${i + 1}:`);
        candidates.push({
            name: name,
            votes: 0
        });
    }

    let numVoters = parseInt(prompt("Enter the number of voters:"));
    if (isNaN(numVoters) || numVoters <= 0) {
        alert("Invalid number of voters.");
        return;
    }

    for (let i = 0; i < numVoters; i++) {
        let vote = prompt(`Voter ${i + 1}, enter your vote (candidate name or leave blank for no vote):`);

        if (vote.trim() === "") {
            continue;  // Skip if the voter did not provide a name (empty vote)
        }

        let candidate = candidates.find(c => c.name.toLowerCase() === vote.trim().toLowerCase());
        if (candidate) {
            candidate.votes++;
        } else {
            alert(`No candidate named "${vote}". Please vote for a valid candidate.`);
        }
    }

    candidates.sort((a, b) => b.votes - a.votes);

    let winner = candidates[0];
    let resultsText = `<p>The winner is ${winner.name} with ${winner.votes} votes.</p><h3>Results:</h3><ul>`;

    candidates.forEach(candidate => {
        resultsText += `<li>${candidate.name}: ${candidate.votes} votes</li>`;
    });

    resultsText += `</ul>`;

    resultsDiv.innerHTML = resultsText;
}