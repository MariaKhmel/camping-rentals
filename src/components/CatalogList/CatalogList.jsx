import { selectAdverts } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import CatalogCard from '../CatalogCard/CatalogCard';

const CatalogList = ({ adverts }) => {
  console.log(adverts);
  return (
    <>
      <div>
        <p>dddddddddd</p>
        <ul>
          {adverts.map(ad => (
            <li key={ad._id}>
              <CatalogCard ad={ad} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CatalogList;
