import CategoriesList from '../CategoriesList/CategoriesList';
import { calculateRating } from '../helpers/calculateRating';
import css from './CatalogCard.module.css';

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
  const reviewsQuantity = reviews.length;
  const rating = calculateRating(reviews);

  return (
    <>
      <div className={css.catalogCard}>
        <div className={css.imgCard}>
          <img className={css.campImg} src={gallery[0]} />
        </div>

        <div className={css.cardDescr}>
          <div className={css.test}>
            <h2>{name}</h2>
            <div>
              <p>{`${price}.00`}</p>
              <button type="button">heart svg</button>
            </div>
          </div>
          <div>
            <p>{`${rating}(${reviewsQuantity} Reviews)`}</p>
            <p>{location}</p>
          </div>
          <p className={css.description}>{description}</p>
          <CategoriesList
            details={details}
            adults={adults}
            transmission={transmission}
            engine={engine}
          />
          <button type="button">Show more</button>
        </div>
      </div>
    </>
  );
};

export default CatalogCard;
