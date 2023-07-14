function solution(k, tangerine) {
  let result = 0;
  const map = new Map();

  tangerine.forEach((data) => {
    map.set(data, (map.get(data) || 0) + 1);
  });

  const arr = [...map].sort((a, b) => b[1] - a[1]);

  while (k > 0) {
    k -= arr.shift()[1];
    result++;
  }

  return result;
}
