// 문제 5. 이진수 정렬

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const numberList = input[1].split(" ").map(Number);

// 2진수로 변환한 후 정규식을 사용하여 '1'의 개수를 센다.
function countSetBits(num) {
  const binaryString = num.toString(2);
  const matchArray = binaryString.match(/1/g);
  return matchArray ? matchArray.length : 0;
}

const countList = numberList.map(countSetBits);

// 숫자와 해당 숫자의 1의 개수를 객체로 묶어 배열에 저장
const numberObjects = numberList.map((number, index) => ({
  number,
  count: countList[index],
}));

numberObjects.sort((a, b) => {
  if (a.count === b.count) {
    return b.number - a.number;
  } else {
    return b.count - a.count;
  }
});

console.log(numberObjects[K - 1].number);
