import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAdverts,
  selectError,
  selectIsLoading,
  selectPage,
  selectTotalPages,
} from '../../redux/selectors';
import {
  fetchCatalog,
  fetchCatalogByPage,
} from '../../redux/catalog/operations';
import CatalogList from '../CatalogList/CatalogList';
import { setPage } from '../../redux/catalog/catalogSlice';

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCatalogByPage(page));
  }, [dispatch, page]);

  const handleLoadMoreClick = () => {
    dispatch(setPage());
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {adverts.length > 0 && <CatalogList adverts={adverts} />}
      <button
        type="button"
        onClick={handleLoadMoreClick}
        disabled={totalPages === page}
      >
        Load More
      </button>
    </>
  );
};

export default Catalog;
