function removeDuplicates(array) {
    return Array.from(new Set(array));
  }
  
///

function increaseScores(scores) {
    const updatedScores = new Map();
    scores.forEach((score, student) => {
        updatedScores.set(student, score + 5);
    });
    return updatedScores;
}

  