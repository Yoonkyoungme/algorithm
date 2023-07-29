function solution(sequence, k) {
  let [start, end] = [0, 0];
  let sum = sequence[0];
  let result = [];

  while (end < sequence.length) {
    if (sum < k) {
      sum += sequence[++end];
    } else if (sum > k) {
      sum -= sequence[start++];
    } else {
      result.push([start, end]);
      sum += sequence[++end];
    }
  }
  return result.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
}