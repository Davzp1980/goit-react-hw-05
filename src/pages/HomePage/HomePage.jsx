import { useEffect } from 'react';
import { getTrendingMovies } from '../../components/movie-api';
import { Link } from 'react-router-dom';

function HomePage({ setTrendingMovies, trendingMovies }) {
  useEffect(() => {
    async function fetchMovieList() {
      const res = await getTrendingMovies();

      setTrendingMovies(res);
    }
    fetchMovieList();
  }, []);

  return (
    <>
      <ul>
        {trendingMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default HomePage;
