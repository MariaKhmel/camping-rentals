import Location from '../Location/Location';
import ReviewsRating from '../ReviewsRating/ReviewsRating';
import css from './Modal.module.css';
import Reviews from '../Reviews/Reviews';
import Features from '../Features/Features';
import { useState } from 'react';
import ModalNav from '../ModalNav/ModalNav';

const Modal = ({ ad, closeModal }) => {
  const { name, reviews, location, price, gallery, description } = ad;
  const modalNav = ['features', 'reviews'];
  const [isSelected, setSelected] = useState(false);

  const handleModalNavClick = e => {
    setSelected(e.target.value);
  };
  const OnEscHandleModalClose = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
    setSelected(false);
    window.removeEventListener('keydown', OnEscHandleModalClose);
  };

  window.addEventListener('keydown', OnEscHandleModalClose);

  return (
    <>
      <div className={css.modalOverlay} onClick={closeModal}>
        <div className={css.modalContent} id="modalContent">
          <button type="button" onClick={closeModal} className={css.closeBtn}>
            X
          </button>
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
          <ModalNav
            modalNav={modalNav}
            handleModalNavClick={handleModalNavClick}
          />
          {/* 
          {isSelected && (isSelected === 'features' ? (
            <Features ad={ad} />
          ) : (
            <Reviews reviews={reviews} />
          ) } */}

          {isSelected &&
            (isSelected === 'features' ? (
              <Features ad={ad} />
            ) : (
              <Reviews reviews={reviews} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Modal;
