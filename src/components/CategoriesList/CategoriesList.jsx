import css from './CategoriesList.module.css';
import '../../styles/index.css';

const CategoriesList = ({
  details: { beds, kitchen, airConditioner },
  adults,
  transmission,
  engine,
}) => {
  return (
    <>
      <div>
        <ul className={css.categoriesList}>
          <li>
            <button className={css.categoryBtn}>
              <svg className={css.categoryIcon}></svg>
              <span>{`${adults} adults`}</span>
            </button>
          </li>
          <li>
            <button className={css.categoryBtn}>
              <svg className={css.categoryIcon}></svg>

              <span className="capitalize">{transmission}</span>
            </button>
          </li>
          <li>
            <button className={css.categoryBtn}>
              <svg className={css.categoryIcon}></svg>
              <span className="capitalize">{engine}</span>
            </button>
          </li>
          <li>
            <button className={css.categoryBtn}>
              <svg className={css.categoryIcon}></svg>

              <span className="capitalize">{kitchen && 'Kitchen'}</span>
            </button>
          </li>
          <li>
            <button className={css.categoryBtn}>
              <svg className={css.categoryIcon}></svg>
              <span>{`${beds} beds`}</span>
            </button>
          </li>
          <li>
            <button className={css.categoryBtn}>
              <svg className={css.categoryIcon}></svg>
              <span>{airConditioner && 'AC'}</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CategoriesList;
