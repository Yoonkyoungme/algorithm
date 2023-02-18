function solution(answers) {
  let score = [0, 0, 0];
  let p1 = [1, 2, 3, 4, 5];
  let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (p1[i % p1.length] === answers[i]) score[0] += 1;
    if (p2[i % p2.length] === answers[i]) score[1] += 1;
    if (p3[i % p3.length] === answers[i]) score[2] += 1;
  }

  const maxScore = Math.max(...score);
  const result = [];
  score.forEach((value, idx) => {
    if (value === maxScore) result.push(idx + 1);
  });

  return result;
}