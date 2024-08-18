import css from './CatalogPage.module.css';
import Catalog from '../../components/Catalog/Catalog';
import Location from '../../components/Location/Location';

const CatalogPage = () => {
  return (
    <main className={css.catalogContent}>
      <Location />
      <Catalog />
    </main>
  );
};

export default CatalogPage;
