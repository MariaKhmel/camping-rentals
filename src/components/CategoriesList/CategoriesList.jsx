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
            {/* capitalize */}
          </li>
          <li>
            <CategoryButton value={engine} />
            {/* capitalize */}
          </li>
          <li>
            <CategoryButton category="Kitchen" />
            {/* capitalize */}
          </li>
          <li>
            <CategoryButton value={beds} category="beds" />
          </li>
          <li>
            <CategoryButton category="AC" />
            {/* airConditioner */}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CategoriesList;
