import Location from '../Location/Location';
import ReviewsRating from '../ReviewsRating/ReviewsRating';
import css from './Modal.module.css';
import Reviews from '../Reviews/Reviews';
import Features from '../Features/Features';
import { useState } from 'react';

const Modal = ({ name, reviews, location, price, gallery, description }) => {
  const modalNav = ['features', 'reviews'];
  const [isSelected, setSelected] = useState(null);
  const handleModalNavClick = e => {
    console.log(e.target);
  };
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
          <p>yes</p>
          <ul>
            {modalNav.map(navItem => (
              <li key={navItem}>
                {/* <a onClick={handleModalNavClick}>{navItem}</a> */}
                <button type="button" onClick={handleModalNavClick}>
                  {navItem}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Modal;
