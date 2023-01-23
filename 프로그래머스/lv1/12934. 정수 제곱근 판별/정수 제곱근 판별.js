function solution(n) {
  const result = Math.sqrt(n);
  return Number.isInteger(result) ? Math.pow(result + 1, 2) : -1;
}
