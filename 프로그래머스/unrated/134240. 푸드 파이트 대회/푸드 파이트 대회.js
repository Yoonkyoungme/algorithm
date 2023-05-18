function solution(food) {
  let front = "";

  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < parseInt(food[i] / 2); j++) front += i;
  }

  let end = front.split("").reverse().join("");

  return `${front}0${end}`;
}
