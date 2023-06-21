function solution(array, commands) {
  const result = commands.map((el) => {
    const [i, j, k] = el;
    const list = array.slice(i - 1, j).sort((a, b) => a - b);
    return list[k - 1];
  });

  return result;
}
