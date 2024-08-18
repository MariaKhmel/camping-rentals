import css from './FavoritesList.module.css';
import CatalogCard from '../CatalogCard/CatalogCard';

const FavoritesList = ({ favorites }) => {
  return (
    <>
      <ul className={css.favoritesList}>
        {favorites.map(ad => (
          <li key={ad._id}>
            <CatalogCard ad={ad} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default FavoritesList;
