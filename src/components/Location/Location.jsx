import css from './Location.module.css';
import icons from '../../assets/symbol-defs.svg';
const Location = ({ location }) => {
  return (
    <>
      <div>
        <svg className={css.locationIcon}>
          <use href={`${icons}#icon-map`} className={css.locationIcon}></use>
        </svg>
        <span>{location}</span>
      </div>
    </>
  );
};

export default Location;
