import { useState } from 'react';
import CategoriesList from '../CategoriesList/CategoriesList';
import { calculateRating } from '../helpers/calculateRating';
import css from './CatalogCard.module.css';
import Modal from '../Modal/Modal';
import ReviewsRating from '../ReviewsRating/ReviewsRating';
import Location from '../Location/Location';

const CatalogCard = ({
  ad: {
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
  },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <div className={css.catalogCard}>
        <div className={css.imgCard}>
          <img className={css.campImg} src={gallery[0]} alt="capm image" />
        </div>

        <div className={css.cardDescr}>
          <div className={css.saleBlock}>
            <h2>{name}</h2>
            <div>
              <p>{`${price}.00`}</p>
              <button type="button">heart svg</button>
            </div>
          </div>
          <div>
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
          <button type="button" onClick={openModal}>
            Show more
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          name={name}
          reviews={reviews}
          location={location}
          price={price}
          gallery={gallery}
          description={description}
        />
      )}
    </>
  );
};

export default CatalogCard;
