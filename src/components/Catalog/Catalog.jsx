import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAdverts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { fetchCatalog } from '../../redux/catalog/operations';
import CatalogList from '../CatalogList/CatalogList';

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {adverts.length > 0 && <CatalogList adverts={adverts} />}
    </>
  );
};

export default Catalog;
