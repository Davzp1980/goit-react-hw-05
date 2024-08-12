import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../components/movie-api';
import MovieList from '../../components/MovieList/MovieList';

function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovieList() {
      const res = await getTrendingMovies();

      setMovies(res);
    }
    fetchMovieList();
  }, []);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}

export default HomePage;
