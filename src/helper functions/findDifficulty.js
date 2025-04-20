function findDifficulty(reviews){
    if(reviews.length === 0){
        return "N/A"
    }

    const difficulties = ["easy", "medium", "hard"]

    const difficultyCounts = reviews.reduce((acc, review) => {
    const difficulty = review.difficulty?.toLowerCase();
    if (difficulties.includes(difficulty)) {
        acc[difficulty] = (acc[difficulty] || 0) + 1;
    }
    return acc;
    }, { easy: 0, medium: 0, hard: 0 });

    const { easy, medium, hard } = difficultyCounts

    const maxCount = Math.max(easy, medium, hard);

    if (maxCount === easy) return "Easy";
    if (maxCount === medium) return "Medium";
    return "Hard";
}


export default findDifficulty