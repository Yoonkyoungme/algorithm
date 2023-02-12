function solution(n) {
  const isPrime = new Array(n + 1).fill(true).fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) isPrime[j] = false;
    }
  }

  const result = isPrime.filter((number) => number === true);
  return result.length;
}
