function calculateTakeAgainPercentage(reviews) {
    if(reviews.length === 0){
        return "N/A"
    }

    const reviewLength = reviews.length
    const takeAgainCount = reviews.filter(review => review.takeAgain === true).length
    
    return ((takeAgainCount / reviewLength) * 100).toFixed(1);

}

export default calculateTakeAgainPercentage
