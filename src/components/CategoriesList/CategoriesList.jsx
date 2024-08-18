import css from './CategoriesList.module.css';
import CategoryButton from '../CategoryButton/CategoryButton';

const CategoriesList = ({
  details: { beds },
  adults,
  transmission,
  engine,
}) => {
  return (
    <>
      <div>
        <ul className={css.categoriesList}>
          <li>
            <CategoryButton value={adults} category="adults" />
          </li>
          <li>
            <CategoryButton value={transmission} />
          </li>
          <li>
            <CategoryButton value={engine} />
          </li>
          <li>
            <CategoryButton category="Kitchen" />
          </li>
          <li>
            <CategoryButton value={beds} category="beds" />
          </li>
          <li>
            <CategoryButton category="AC" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default CategoriesList;
