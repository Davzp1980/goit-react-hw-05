import { useEffect, useState } from 'react';
import { searchMovies } from '../../components/movie-api';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Field, Formik, Form } from 'formik';
import MovieList from '../../components/MovieList/MovieList';

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = searchParams.get('query');
  const initialValues = {
    searchValue: query || '',
  };
  useEffect(() => {
    async function getMovies() {
      const res = await searchMovies(query);

      setMovies(res.results);
    }
    getMovies();
  }, [searchParams, query]);

  function handleSubmit(values) {
    setSearchParams({
      query: values.searchValue,
    });
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="searchValue" />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      <MovieList movies={movies} location={location} />
    </>
  );
}

export default MoviesPage;
