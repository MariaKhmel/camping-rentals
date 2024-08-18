import css from './CatalogList.module.css';
import CatalogCard from '../CatalogCard/CatalogCard';

const CatalogList = ({ adverts }) => {
  return (
    <div>
      <ul className={css.catalogList}>
        {adverts.map(ad => (
          <li key={ad._id}>
            <CatalogCard ad={ad} />
          </li>
        ))}
      </ul>
      <button></button>
    </div>
  );
};

export default CatalogList;
