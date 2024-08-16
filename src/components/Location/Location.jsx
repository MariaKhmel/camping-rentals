import css from './Location.module.css';

const Location = ({ location }) => {
  return (
    <>
      <div>
        <svg className={css.locationIcon}></svg>
        <span>{location}</span>
      </div>
    </>
  );
};

export default Location;
