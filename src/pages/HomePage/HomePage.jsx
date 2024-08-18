import { useNavigate } from 'react-router-dom';
import { handleSubmit } from '../../services/navigateToCatalog';
import css from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <main className={css.pageContent}>
      <h1>Welcome to the Camping rentals</h1>
      <button
        type="button"
        onClick={() => handleSubmit(navigate)}
        className={css.homeBtn}
      >
        To the Catalog
      </button>
    </main>
  );
};

export default HomePage;
