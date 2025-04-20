function calculateRating(reviews){
    if(reviews.length === 0){
        return "N/A"
    }

    return  (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);
}

export default calculateRating