import css from './CategoryButton.module.css';
import '../../styles/index.css';

const CategoryButton = ({ value = '', category = '' }) => {
  return (
    <button className={css.categoryBtn}>
      <svg className={css.categoryIcon}></svg>
      <span>{`${value} ${category}`}</span>
    </button>
  );
};
export default CategoryButton;
