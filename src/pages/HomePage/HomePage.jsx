import { Link, Outlet, useNavigate } from 'react-router-dom';
import { handleSubmit } from '../../services/navigateToCatalog';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome to the Camping rentals</h1>
      <button type="button" onClick={() => handleSubmit(navigate)}>
        To the Catalog
      </button>
    </>
  );
};

export default HomePage;
