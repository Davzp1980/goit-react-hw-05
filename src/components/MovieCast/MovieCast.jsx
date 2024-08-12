import { useParams } from 'react-router-dom';
import { getMovieCasts } from '../movie-api';
import { useEffect, useState } from 'react';
import css from './MovieCast.module.css';

const defaultImg =
  '<https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster>';

function MovieCast() {
  const { id } = useParams();
  const movId = parseInt(id);
  const [casts, setCasts] = useState([]);
  const [isCasts, setIsCasts] = useState(false);

  useEffect(() => {
    async function getCasts(movieId) {
      const res = await getMovieCasts(movieId);

      setCasts(res.cast);
      if (res.cast.length === 0) {
        setIsCasts(true);
      }
    }
    getCasts(movId);
  }, [movId]);

  return (
    <>
      {isCasts && <p>We don&apos;t have any casts for this move</p>}
      <ul className={css.ul}>
        {casts.map(cast => (
          <li key={cast.id} className={css.li}>
            <img
              className={css.img}
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                  : defaultImg
              }
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
