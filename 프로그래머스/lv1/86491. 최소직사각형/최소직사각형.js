function solution(sizes) {
  const [w, h] = sizes.reduce(
    ([widths, heights], [x, y]) => {
      widths.push(Math.max(x, y));
      heights.push(Math.min(x, y));
      return [widths, heights];
    },
    [[], []]
  );

  return Math.max(...w) * Math.max(...h);
}
