import css from './CatalogList.module.css';
import CatalogCard from '../CatalogCard/CatalogCard';

const CatalogList = ({ adverts }) => {
  console.log(adverts);
  return (
    <ul className={css.catalogList}>
      {adverts.map(ad => (
        <li key={ad._id}>
          <CatalogCard ad={ad} />
        </li>
      ))}
    </ul>
  );
};

export default CatalogList;
