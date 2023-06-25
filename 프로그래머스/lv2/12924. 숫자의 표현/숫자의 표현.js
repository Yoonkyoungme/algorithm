function solution(n) {
  // 방법1
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) {
      result++;
    }
  }
  return result;

  // 방법2
  // let result = 0;
  // for (let i = 0; i < n - 1; i++) {
  //   let count = 0;
  //   for (let j = i + 1; j < n + 1; j++) {
  //     if (count > n) {
  //       break;
  //     } else if (count === n) {
  //       result++;
  //       break;
  //     }
  //     count += j;
  //   }
  // }
  // return result + 1;
}
