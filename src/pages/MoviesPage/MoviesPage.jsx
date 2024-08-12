import { Outlet, useNavigate } from 'react-router-dom';

function MoviesPage() {
  const navigate = useNavigate();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          navigate('/');
        }}
      >
        Go back
      </button>
      <Outlet />
    </>
  );
}

export default MoviesPage;
