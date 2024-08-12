import { useParams } from 'react-router-dom';
import { getMovieCasts } from '../movie-api';
import { useEffect, useState } from 'react';
import css from './MovieCast.module.css';

function MovieCast() {
  const { id } = useParams();
  const movId = parseInt(id);
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function getCasts(movieId) {
      const res = await getMovieCasts(movieId);

      setCasts(res.cast);
    }
    getCasts(movId);
  }, [movId]);

  return (
    <>
      <ul className={css.ul}>
        {casts.map(cast => (
          <li key={cast.id} className={css.li}>
            <img
              className={css.img}
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={cast.original_name}
            />
            <p>Character: </p>
            <p className={css.name}>{cast.character}</p>
            <p>Actor name:</p>
            <p className={css.name}> {cast.original_name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MovieCast;
