function solution(N, stages) {
  const map = new Map();
  let stagesLength = stages.length;

  for (let i = 1; i <= N; i++) {
    const count = stages.filter((stage) => stage === i).length;
    map.set(i, count / stagesLength);
    stagesLength -= count;
  }

  const result = new Map([...map].sort((a, b) => b[1] - a[1]));
  return [...result.keys()];
}
