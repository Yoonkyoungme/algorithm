function solution(n) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count += i;

      let num = n / i;
      if (num !== i) count += num;
    }
  }

  return count;
}