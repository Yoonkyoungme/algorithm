function solution(n, a, b) {
  let result = 0;

  while (Math.ceil(a) !== Math.ceil(b)) {
    a = a / 2;
    b = b / 2;
    result += 1;
  }
  return result;
}
