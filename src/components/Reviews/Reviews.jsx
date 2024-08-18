const Reviews = ({ reviews }) => {
  const getStarArr = value => {
    return new Array(value).fill(1);
  };

  return (
    <div>
      <ul>
        {reviews.map(({ reviewer_name, comment, reviewer_rating }) => (
          <li key={reviewer_name}>
            <p>{reviewer_name}</p>
            {getStarArr(reviewer_rating).map((item, idx) => (
              <span key={idx}>★ </span>
            ))}
            <p>{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
