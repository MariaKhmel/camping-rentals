import { useState } from 'react';
import CategoriesList from '../CategoriesList/CategoriesList';
import css from './CatalogCard.module.css';
import Modal from '../Modal/Modal';
import ReviewsRating from '../ReviewsRating/ReviewsRating';
import Location from '../Location/Location';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../../redux/favorites/favoritesSlice';

const CatalogCard = ({ ad }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = e => {
    if (e.target.code === 'Escape') {
      setIsModalOpen(false);
    }
    if (e.target !== e.currentTarget) {
      return;
    }
    setIsModalOpen(false);
  };

  const onFavoriteToggle = () => {
    dispatch(setFavorite(ad));
  };

  const {
    name,
    gallery,
    reviews,
    location,
    description,
    adults,
    transmission,
    engine,
    details,
    price,
  } = ad;

  return (
    <>
      <div className={css.catalogCard}>
        <div className={css.imgCard}>
          <img className={css.campImg} src={gallery[0]} alt="capm image" />
        </div>

        <div className={css.cardDescr}>
          <div className={css.saleBlock}>
            <h2>{name}</h2>
            <div className={css.favoriteBlock}>
              <p>{`${price}.00`}</p>
              <button
                type="button"
                onClick={onFavoriteToggle}
                className={css.favoritesBtn}
              >
                ♥
              </button>
            </div>
          </div>
          <div className={css.infoBlock}>
            <ReviewsRating reviews={reviews} />
            <Location location={location} />
          </div>
          <p className={css.description}>{description}</p>
          <CategoriesList
            details={details}
            adults={adults}
            transmission={transmission}
            engine={engine}
          />
          <button type="button" onClick={openModal} className={css.cardBtn}>
            Show more
          </button>
        </div>
      </div>

      {isModalOpen && <Modal ad={ad} closeModal={closeModal} />}
    </>
  );
};

export default CatalogCard;
