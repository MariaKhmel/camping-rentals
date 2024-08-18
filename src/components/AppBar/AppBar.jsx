import { TbCamper } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AppBar.module.css';

const AppBar = () => {
  const isLinkActive = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
  };
  return (
    <>
      <header className={css.header}>
        <a className={css.logo} href="/">
          <TbCamper />
          Camping rentals
        </a>

        <nav>
          <ul className={css.navList}>
            <NavLink to="/" className={isLinkActive}>
              HomePage
            </NavLink>
            <NavLink to="/catalog" className={isLinkActive}>
              Catalog
            </NavLink>
            <NavLink to="/favorites" className={isLinkActive}>
              Favorites
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default AppBar;
