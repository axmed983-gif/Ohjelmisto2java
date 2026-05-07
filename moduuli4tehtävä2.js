const form = document.getElementById('searchForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const valueFromInput = document.getElementById('query').value;

  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${valueFromInput}`
  );

  const data = await response.json();

  console.log(data);
});