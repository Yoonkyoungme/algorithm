function solution(progresses, speeds) {
  const deploy = [];
  const result = [];

  progresses.forEach((progress, index) => {
    deploy.push(Math.ceil((100 - progress) / speeds[index]));
  });

  let temp = [deploy[0], 1];
  for (let i = 1; i < deploy.length; i++) {
    if (temp[0] >= deploy[i]) {
      temp[1]++;
    } else {
      result.push(temp[1]);
      temp = [deploy[i], 1];
    }
  }
  result.push(temp[1]);
  return result;
}
