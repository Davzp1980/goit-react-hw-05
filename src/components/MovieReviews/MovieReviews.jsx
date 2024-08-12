import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../movie-api';
import { useEffect, useState } from 'react';
import css from './MovieReviews.module.css';

function MovieReviews() {
  const { id } = useParams();
  const movId = parseInt(id);
  const [reviews, setReviews] = useState([]);
  const [isReviews, setIsReviews] = useState(false);

  useEffect(() => {
    async function getReviews(movieId) {
      const res = await getMovieReviews(movieId);

      if (res.results.length === 0) {
        setIsReviews(true);
      }
      setReviews(res.results);
    }
    getReviews(movId);
  }, [movId, reviews.length]);

  return (
    <>
      {isReviews && <p>We don&apos;t have any reviews for this move</p>}
      {reviews.length !== 0 && (
        <ul className={css.ul}>
          {reviews.map(review => (
            <li key={review.id} className={css.li}>
              <p className={css.name}>{review.author}</p>
              <p className={css.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MovieReviews;
