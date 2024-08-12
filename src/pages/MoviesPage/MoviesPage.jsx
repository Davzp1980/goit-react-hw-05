import { useEffect, useState } from 'react';
import { searchMovies } from '../../components/movie-api';
import { useLocation, useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';

function MoviesPage() {
  const [searchValue, setSearchValue] = useState(null);
  const [, setSearchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (searchValue === null) return;
    async function getMovies(search) {
      const res = await searchMovies(search);
      setSearchParams({
        query: search,
      });

      setMovies(res.results);
    }
    getMovies(searchValue);
  }, [searchValue, setSearchParams]);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchValue(e.currentTarget.elements.searchValue.value);
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
