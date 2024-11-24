'use strict';

async function getJokes(query) {
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
        const data = await response.json();
        const jokesContainer = document.getElementById('jokes');
        jokesContainer.innerHTML = ''; // Clear any previous jokes

        data.result.forEach(joke => {
            const article = document.createElement('article');
            const jokeText = document.createElement('p');
            jokeText.textContent = joke.value;
            article.appendChild(jokeText);
            jokesContainer.appendChild(article);
        });
    } catch (error) {
        console.log('Error:', error);
    }
}

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-term').value;
    if (searchTerm) {
        getJokes(searchTerm);
    }
});