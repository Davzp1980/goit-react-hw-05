import axios from 'axios';
const getTrendingUrl =
  'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzg4ZGEwNTA5NDAxYmIxM2E3ZmIxNjQ4ODY4ZGFmMCIsIm5iZiI6MTcyMzM3NzY4OS43OTQ5MzEsInN1YiI6IjY2YjhhNGI1ZGZlMWI4MjQxZTZkY2U0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UKBv4XUiggq2gieKtapzEKqSeZxA0z8T8zuJrU9X32Q',
  },
};
export async function getTrendingMovies() {
  const res = await axios.get(getTrendingUrl, options);
  return res.data.results;
}

export async function getMovieDetails(movieId) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return res.data;
}

export async function getMovieCasts(movieId) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  return res.data;
}

export async function getMovieReviews(movieId) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return res.data;
}

export async function searchMovies(movieName) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1`,
    {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzg4ZGEwNTA5NDAxYmIxM2E3ZmIxNjQ4ODY4ZGFmMCIsIm5iZiI6MTcyMzM3NzY4OS43OTQ5MzEsInN1YiI6IjY2YjhhNGI1ZGZlMWI4MjQxZTZkY2U0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UKBv4XUiggq2gieKtapzEKqSeZxA0z8T8zuJrU9X32Q',
      },
      params: {
        query: movieName,
      },
    }
  );
  return res.data;
}
