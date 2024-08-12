import { useEffect, useState } from 'react';
import { searchMovies } from '../../components/movie-api';
import { Link, useSearchParams } from 'react-router-dom';

function MoviesPage() {
  const [searchValue, setSearchValue] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [movies, setMovies] = useState([]);

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

    //e.currentTarget.reset();
  }

  return (
    <>
      <h1>Search form Вы искали: {query}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchValue" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MoviesPage;
