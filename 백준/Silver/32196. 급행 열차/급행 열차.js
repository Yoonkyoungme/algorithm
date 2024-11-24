const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M, K, X, Y] = input.shift().split(" ").map(BigInt);
const stationTimes = input.map((line) => line.split(" ").map(BigInt));

stationTimes.sort((stationA, stationB) => {
  const efficiencyA = stationA[0] * X - stationA[1] * Y;
  const efficiencyB = stationB[0] * X - stationB[1] * Y;
  return efficiencyA > efficiencyB ? 1 : -1;
});

let generalTrainTime = K;
let expressTrainTime = K;

for (let i = 0; i < M; i++) {
  generalTrainTime += stationTimes[i][0];
  expressTrainTime -= stationTimes[i][1];
}

console.log(String(generalTrainTime * X + expressTrainTime * Y));