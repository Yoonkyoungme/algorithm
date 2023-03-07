function solution(n, m) {
  const gdc = getGDC(n, m);
  const lcm = (n * m) / gdc;

  return [gdc, lcm];
}

function getGDC(a, b) {
  if (b === 0) return a;
  return getGDC(b, a % b);
}
