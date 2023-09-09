function solution(priorities, location) {
  let result = 0;

  while (priorities.length > 0) {
    const current = priorities.shift();

    if (priorities.some((p) => p > current)) {
      priorities.push(current);
    } else {
      result++;
      if (location === 0) return result;
    }

    location = location === 0 ? priorities.length - 1 : location - 1;
  }

  return result;
}