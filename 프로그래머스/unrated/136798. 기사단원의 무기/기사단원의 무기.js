function solution(number, limit, power) {
  let result = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) count += 1;
        else count += 2;
      }
      if (count > limit) {
        count = power;
        break;
      }
    }
    result += count;
  }

  return result;
}
