function calculateRating(reviews){
    return  (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);
}

export default calculateRating