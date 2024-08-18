import CatalogCard from '../CatalogCard/CatalogCard';

const FavoritesList = ({ favorites }) => {
  return (
    <>
      <ul>
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
