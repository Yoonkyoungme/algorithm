function solution(progresses, speeds) {
  const result = [];
  let previousMaxDeploy = 0;

  for (let i = 0; i < progresses.length; i++) {
    const deploy = Math.ceil((100 - progresses[i]) / speeds[i]);

    if (deploy > previousMaxDeploy) {
      result.push(1);
      previousMaxDeploy = deploy;
    } else {
      result[result.length - 1]++;
    }
  }

  return result;
}
