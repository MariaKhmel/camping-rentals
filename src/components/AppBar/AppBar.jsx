import { TbCamper } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
const AppBar = () => {
  return (
    <>
      <header>
        <p>
          <span>
            <TbCamper />
          </span>{' '}
          Camping rentals
        </p>

        <nav>
          <ul>
            <NavLink to="/">HomePage</NavLink>
            <NavLink to="/catalog">Catalog</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default AppBar;
