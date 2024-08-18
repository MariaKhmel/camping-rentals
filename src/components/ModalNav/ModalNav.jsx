import css from './ModalNav.module.css';

const ModalNav = ({ modalNav, handleModalNavClick }) => {
  return (
    <ul className={css.modalNav}>
      {modalNav.map(navItem => (
        <li key={navItem}>
          <button type="button" onClick={handleModalNavClick} value={navItem}>
            {navItem}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ModalNav;
