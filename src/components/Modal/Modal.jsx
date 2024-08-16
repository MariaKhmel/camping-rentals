import { Outlet } from 'react-router-dom';
import Location from '../Location/Location';
import ReviewsRating from '../ReviewsRating/ReviewsRating';
import css from './Modal.module.css';

const Modal = ({ name, reviews, location, price, gallery, description }) => {
  return (
    <>
      <div className={css.modalOverlay}>
        <div className={css.modalContent}>
          <div>
            <h2>{name}</h2>
            <ReviewsRating reviews={reviews} />
            <Location location={location} />
            <p>{`${price}.00`}</p>
          </div>
          <ul className={css.imageList}>
            {gallery.map(image => (
              <li key={image} className={css.imageItem}>
                <img src={image} alt="capm image" className={css.modalImg} />
              </li>
            ))}
          </ul>

          <p className={css.description}>{description}</p>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Modal;
