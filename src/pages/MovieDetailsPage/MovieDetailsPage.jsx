import {
  Link,
  Outlet,
  useLocation,
  // useNavigate,
  useParams,
} from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { getMovieDetails } from '../../components/movie-api';
import { useEffect, useState } from 'react';

const defaultImg =
  '<https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster>';
function MovieDetailsPage() {
  // const navigate = useNavigate();
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = location.state ?? '/';

  const movId = parseInt(id);
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState('');

  useEffect(() => {
    if (!movId) return;
    async function moviesDetails(movieId) {
      const res = await getMovieDetails(movieId);

      setMovie(res);
      const genres = res.genres.map(genre => genre.name).join(', ');
      setGenres(genres);
    }

    moviesDetails(movId);
  }, [movId]);

  return (
    <>
      <Link to={backLinkHref}>Go back</Link>

      <div className={css.main}>
        <div className={css.imgDiv}>
          <img
            className={css.img}
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                : defaultImg
            }
            alt={movie.title}
          />
        </div>
        <div>
          <h2>{movie.title}</h2>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
      <div className={css.castDiv}>
        <p>Additional information</p>
        <ul className={css.castList}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default MovieDetailsPage;
