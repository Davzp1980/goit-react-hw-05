import { useParams } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';

function MovieDetailsPage({ trendingMovies }) {
  const { id } = useParams();
  const movie = trendingMovies.find(movie => movie.id === parseInt(id));
  console.log(movie);

  return (
    <div className={css.main}>
      <div className={css.imgDiv}>
        <img
          className={css.img}
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>
      <div>
        <h2>{movie.title}</h2>
        <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>Drama History War</p>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
