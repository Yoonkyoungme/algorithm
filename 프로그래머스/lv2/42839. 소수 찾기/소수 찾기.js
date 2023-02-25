function solution(numbers) {
  let result = 0;
  let numCheck = new Set();
  serach("", numbers.split(""));

  function isPrime(number) {
    const arr = new Array(number + 1).fill(true).fill(false, 0, 2);

    for (let i = 2; i * i <= number; i++) {
      if (arr[i]) {
        for (let j = i * i; j <= number; j += i) arr[j] = false;
      }
    }
    return arr[number] === true ? true : false;
  }

  function serach(cur, extra) {
    if (!numCheck.has(Number(cur))) {
      numCheck.add(Number(cur));
      if (isPrime(Number(cur))) result++;
    }

    for (let i = 0; i < extra.length; i++) {
      const copyExtra = [...extra];
      copyExtra.splice(i, 1);
      serach(cur + extra[i], copyExtra);
    }
  }
  return result;
}
