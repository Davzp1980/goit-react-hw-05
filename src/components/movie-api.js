import axios from 'axios';
const url =
  'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'; //'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzg4ZGEwNTA5NDAxYmIxM2E3ZmIxNjQ4ODY4ZGFmMCIsIm5iZiI6MTcyMzM3NzY4OS43OTQ5MzEsInN1YiI6IjY2YjhhNGI1ZGZlMWI4MjQxZTZkY2U0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UKBv4XUiggq2gieKtapzEKqSeZxA0z8T8zuJrU9X32Q',
  },
  params: {},
};
export async function getTrendingMovies() {
  const res = await axios.get(url, options);
  return res.data.results;
}
