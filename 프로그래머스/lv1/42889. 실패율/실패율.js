function solution(N, stages) {
  let result = [];

  for (let i = 1; i <= N; i++) {
    let over = stages.filter((stage) => stage >= i).length;
    let count = stages.filter((stage) => stage === i).length;
    result.push([i, count / over]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((failure) => failure[0]);
}