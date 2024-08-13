import { useEffect, useState } from 'react';
import { searchMovies } from '../../components/movie-api';
import { useLocation, useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query');
    async function getMovies() {
      const res = await searchMovies(query);

      setMovies(res.results);
    }
    getMovies();
  }, [searchParams]);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({
      query: e.currentTarget.elements.searchValue.value,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchValue" />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} location={location} />
    </>
  );
}

export default MoviesPage;
