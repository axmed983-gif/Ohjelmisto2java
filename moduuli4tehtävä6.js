const form = document.getElementById('searchForm');
const results = document.getElementById('results');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  results.innerHTML = '';

  const valueFromInput = document.getElementById('query').value;

  const response = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${valueFromInput}`
  );

  const data = await response.json();

  data.result.forEach(joke => {
    results.innerHTML += `
      <article>
        <p>${joke.value}</p>
      </article>
    `;
  });
});