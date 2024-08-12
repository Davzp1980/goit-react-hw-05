import './App.css';
import { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const Header = lazy(() => import('./pages/Header/Header'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);
//Дальше MovieCast
function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  return (
    <>
      <Header />
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setTrendingMovies={setTrendingMovies}
                trendingMovies={trendingMovies}
              />
            }
          />
          <Route path="/movies" element={<MoviesPage />}>
            <Route
              path=":id"
              element={<MovieDetailsPage trendingMovies={trendingMovies} />}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
