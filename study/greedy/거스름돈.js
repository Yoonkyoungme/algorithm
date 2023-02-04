// 3-1. 거스름돈

let n = 1260;
let result = 0;

const coin_type = [500, 100, 50, 10];

coin_type.forEach((coin, index) => {
  result += parseInt(n / coin);
  n %= coin;
});

console.log(result);
