'use strict';

const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const query = document.querySelector('#query').value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
});