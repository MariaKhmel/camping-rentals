import { calculateRating } from '../helpers/calculateRating';

export const ReviewsRating = ({ reviews }) => {
  const reviewsQuantity = reviews.length;
  const rating = calculateRating(reviews);

  return (
    <>
      <p>{`${rating}(${reviewsQuantity} Reviews)`}</p>
    </>
  );
};

export default ReviewsRating;
