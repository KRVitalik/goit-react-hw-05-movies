const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmZkYjkxMjcyMjg3MGUyMzg4ZGQ0MzU3ODJjYTU2ZiIsInN1YiI6IjY0Y2NmNzU0NzY0Yjk5MDBlM2JhNWFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.In4jq0rW_1654XErrGjwD7GHNgYJB4wzMI8zmAAIdDg',
  },
};

const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getTrendingMovies(value = 'day') {
  const response = await fetch(
    `${BASE_URL}trending/movie/${value}?language=en-US`,
    options
  );
  return await response.json();
}

export async function getMovieById(id) {
  const response = await fetch(
    `${BASE_URL}movie/${id}?language=en-US`,
    options
  );
  return await response.json();
}

export async function getMovieReviews(id) {
  const response = await fetch(
    `${BASE_URL}movie/${id}/reviews?language=en-US&page=1`,
    options
  );
  return await response.json();
}

export async function getActorsFilm(id) {
  const response = await fetch(
    `${BASE_URL}movie/${id}/credits?language=en-US`,
    options
  );
  return await response.json();
}

export async function getSearchFilm(query) {
  const response = await fetch(
    `${BASE_URL}search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return await response.json();
}

export async function getMovieVideo(id) {
  const response = await fetch(
    `${BASE_URL}movie/${id}/videos?language=en-US`,
    options
  );
  return await response.json();
}

export async function getRandomUser() {
  const response = await fetch('https://randomuser.me/api/?results=50');
  return await response.json();
}
