const form = document.getElementById('tvForm');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const query = document.getElementById('query').value;

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();

    console.log(data);

  } catch (error) {
    console.log('Error:', error);
  }
});