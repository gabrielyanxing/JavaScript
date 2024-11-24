'use strict';

const form = document.querySelector('#searchForm');
const resultsDiv = document.querySelector('#results');

form.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const searchQuery = document.querySelector('#query').value.trim();

    if (!searchQuery) {
        return;
    }

    try {
        const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchQuery)}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        resultsDiv.innerHTML = '';

        data.forEach(item => {
            const article = document.createElement('article');

            const h2 = document.createElement('h2');
            h2.textContent = item.show.name;

            const a = document.createElement('a');
            a.href = item.show.url;
            a.textContent = 'More Info';
            a.target = '_blank';

            const img = document.createElement('img');
            // 使用三元运算符处理缺失的图片
            img.src = item.show.image && item.show.image.medium
                ? item.show.image.medium
                : 'https://via.placeholder.com/210x295?text=Not%20Found';
            img.alt = item.show.name;

            const summaryDiv = document.createElement('div');
            summaryDiv.innerHTML = item.show.summary || 'No summary available';

            article.appendChild(h2);
            article.appendChild(img);
            article.appendChild(summaryDiv);
            article.appendChild(a);

            resultsDiv.appendChild(article);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
        resultsDiv.innerHTML = '<p>Error fetching data. Please try again.</p>';
    }
});