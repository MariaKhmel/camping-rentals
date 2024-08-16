import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy } from 'react';
import { LiaXRaySolid } from 'react-icons/lia';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() =>
  import('../pages/FavoritesPage/FavoritesPage')
);
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Features = lazy(() => import('./Features/Features'));

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />}>
            <Route path="features" element={Features} />
            <Route path="reviews" element={Reviews} />
          </Route>
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
