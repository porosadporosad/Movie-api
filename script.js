const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmE1ZGVmODMzYWZjNmVmOGQ2ZjQwY2Q0YjcwYTAzMyIsInN1YiI6IjY1OWE1MTAzYmQ1ODhiMDIwNDU3YTEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Hloft7510m0mwl5LvZ5P_d_BjLkkVF-oc_SRJPlZe4",
  },
};
try {
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      const moviesList = document.getElementById("card-list");
      data.results.forEach((movie) => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("moviecards");
        const movieId = movie.id;
        movieElement.id = movieId;
        movieElement.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"class="movieImage" alt="...">
          <h3 class="movie-title">${movie.title}</h3>
          <p>${movie.overview}</p>
          <p>${movie.vote_average}</p>`;
        moviesList.appendChild(movieElement);

        movieElement.addEventListener("click", function () {
          alert(`영화 id : ${movieId}`);
        });
      });
    });
} catch (err) {
  console.error(err);
} finally {
  console.log("작동");
}

const searchForm = document.getElementById("searchform");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const movieCards = document.querySelectorAll(".moviecards");

  movieCards.forEach((card) => {
    const title = card.querySelector(".movie-title").textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
