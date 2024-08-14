export const calculateRating = reviews => {
    return reviews.reduce((acc, item) => {
        return (acc += item['reviewer_rating']);
    }, 0);
};