function solution(a, b, n) {
  let result = 0;
  
  while (true) {
      if (n < a) {
          return result;
      }
      
      let exchange = parseInt(n / a) * b;
      let left = n % a;
      result += exchange;
      n = exchange + left;
  }
}