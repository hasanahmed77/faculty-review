function calculateTakeAgainPercentage(reviews) {
    const reviewLength = reviews.length
    const takeAgainCount = reviews.filter(review => review.takeAgain === true).length
    
    return ((takeAgainCount / reviewLength) * 100).toFixed(1);

}

export default calculateTakeAgainPercentage
