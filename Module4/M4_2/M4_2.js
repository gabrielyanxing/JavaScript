'use strict';

const form = document.querySelector('#searchForm');
const resultsDiv = document.querySelector('#results');

form.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const searchQuery = document.querySelector('#query').value.trim();

    if (!searchQuery) {
        console.log('Please enter a search term');
        return;
    }

    try {
        const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchQuery)}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Search Results:', data);

        data.forEach((item, index) => {
            console.log(`\nShow ${index + 1}:`);
            console.log('Name:', item.show.name);
            console.log('Rating:', item.show.rating.average);
            console.log('Genres:', item.show.genres);
            console.log('Summary:', item.show.summary);
            console.log('Official Site:', item.show.officialSite);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});