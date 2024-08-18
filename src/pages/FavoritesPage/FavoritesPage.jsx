import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import FavoritesList from '../../components/FavoritesList/FavoritesList';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length > 0 ? (
        <FavoritesList favorites={favorites} />
      ) : (
        <h1>You haven&apos;t added any favorites.</h1>
      )}
    </>
  );
};

export default FavoritesPage;
