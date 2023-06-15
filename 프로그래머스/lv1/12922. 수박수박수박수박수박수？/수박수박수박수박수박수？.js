function solution(n) {
  const repetition = "수박".repeat(n / 2);

  if (n % 2 === 0) return repetition;
  else return repetition + "수";
}