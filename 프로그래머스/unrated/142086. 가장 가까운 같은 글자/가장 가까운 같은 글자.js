function solution(s) {
  let result = [];
  let data = new Map();

  [...s].forEach((value, index) => {
    if (!data.has(value)) result.push(-1);
    else result.push(index - data.get(value));

    data.set(value, index);
  });
    
  return result;
}