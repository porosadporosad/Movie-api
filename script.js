const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmE1ZGVmODMzYWZjNmVmOGQ2ZjQwY2Q0YjcwYTAzMyIsInN1YiI6IjY1OWE1MTAzYmQ1ODhiMDIwNDU3YTEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Hloft7510m0mwl5LvZ5P_d_BjLkkVF-oc_SRJPlZe4'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {
    const moviesList = document.getElementById('card-list');
    data.results.forEach(movie => {
      const movieElement = document.createElement('div');
      const movieId = movie.id;
      movieElement.id = movieId;
      movieElement.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"class="movieImage" alt="...">
        <h3>${movie.title}</h3>
        <p>${movie.overview}</p>
        <p>${movie.vote_average}</p>`
      moviesList.appendChild(movieElement);

      movieElement.addEventListener('click', function () {
        alert(`영화 id : ${movieId}`);
      });
    });
  })
  .catch(err => console.error(err));


const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const moviesList = document.getElementById('card-list');

  moviesList.innerHTML = '';

  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(movie => {
        if (movie.title.toLowerCase().includes(searchTerm)) {
          const movieElement = document.createElement('div');
          const movieId = movie.id;
          movieElement.id = movieId;
          movieElement.innerHTML = `
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="movieImage" alt="...">
                        <h3>${movie.title}</h3>
                        <p>${movie.overview}</p>
                        <p>${movie.vote_average}</p>`;
          moviesList.appendChild(movieElement);

          movieElement.addEventListener('click', function () {
            alert(`영화 id : ${movieId}`);
          });
        }
      });
    })
    .catch(err => console.error(err));
});

