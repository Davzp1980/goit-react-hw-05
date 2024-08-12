import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../components/movie-api';
import { Link } from 'react-router-dom';

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
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
