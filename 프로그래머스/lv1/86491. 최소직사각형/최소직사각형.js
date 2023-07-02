function solution(sizes) {
  let w = [];
  let h = [];

  for (let i = 0; i < sizes.length; i++) {
    const [x, y] = sizes[i];
    if (x >= y) {
      w.push(x);
      h.push(y);
    } else {
      w.push(y);
      h.push(x);
    }
  }
  console.log(w, h);
  return Math.max(...w) * Math.max(...h);
}
