import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalog } from '../../redux/catalog/operations';
import { selectAdverts } from '../../redux/selectors';
import CatalogCard from '../CatalogCard/CatalogCard';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  const adverts = useSelector(selectAdverts);
  const isAdverts = adverts && adverts.length > 0;

  return (
    <>
      <div>
        {isAdverts &&
          adverts.map(ad => {
            <li key={ad._id}>
              <CatalogCard
                ad={ad}
                // liked={favorites.some(item => item._id === camper._id)}
              />
            </li>;
          })}
      </div>
    </>
  );
};

export default Catalog;
