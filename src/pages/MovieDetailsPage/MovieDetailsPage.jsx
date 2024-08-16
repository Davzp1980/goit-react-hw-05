import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { getMovieDetails } from '../../components/movie-api';
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';

const defaultImg =
  'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';
function MovieDetailsPage() {
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = useRef(location.state ?? '/');

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
      <Link to={backLinkHref.current} className={css.goBack}>
        {<IoIosArrowRoundBack className={css.arrow} />} Go back
      </Link>

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
            <Link to="cast" state={backLinkHref}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={backLinkHref}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default MovieDetailsPage;
