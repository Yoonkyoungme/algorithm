function solution(number) {
  let result = 0;

  function combination(numberList, start) {
    if (numberList.length === 3) {
      result += numberList.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i++) {
      combination([...numberList, number[i]], i + 1);
    }
  }

  combination([], 0);

  return result;
}
