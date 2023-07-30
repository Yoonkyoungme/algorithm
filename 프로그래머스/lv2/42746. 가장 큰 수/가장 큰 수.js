function solution(numbers) {
  const result = numbers
    .map((numbers) => numbers.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return result[0] === "0" ? "0" : result;
}
