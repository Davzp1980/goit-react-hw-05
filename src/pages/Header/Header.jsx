import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

function Header() {
  function activeLink({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={activeLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={activeLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
