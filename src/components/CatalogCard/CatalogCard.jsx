import CategoriesList from '../CategoriesList/CategoriesList';
import { calculateRating } from '../helpers/calculateRating';
import css from './CatalogCard.module.css';

const CatalogCard = ({
  ad: {
    gallery,
    reviews,
    location,
    description,
    adults,
    transmission,
    engine,
    details,
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

        <div>
          <h2></h2>
          <section>
            <p>{`${rating}(${reviewsQuantity} Reviews)`}</p>
            <p>{location}</p>
          </section>
          <p className={css.description}>{description}</p>
          <CategoriesList
            details={details}
            adults={adults}
            transmission={transmission}
            engine={engine}
          />
        </div>
      </div>
    </>
  );
};

export default CatalogCard;
