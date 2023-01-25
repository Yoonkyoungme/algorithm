function solution(users, emoticons) {
  const discount = [10, 20, 30, 40];
  const result = [];
  const arr = [];
  const sol = [0, 0];

  function combnation() {
    if (arr.length === emoticons.length) {
      result.push([...arr]);
      return;
    }

    for (let i = 0; i < discount.length; i++) {
      arr.push(discount[i]);
      combnation();
      arr.pop();
    }
  }

  combnation();
  // console.log(result);

  result.forEach((data, index) => {
    const answer = [0, 0];

    users.forEach((user) => {
      let sum = 0;

      emoticons.forEach((emoticon, idx) => {
        if (data[idx] >= user[0]) {
          sum += emoticon * (100 - data[idx]) * 0.01;
        }
      });

      if (sum >= user[1]) {
        answer[0] += 1;
      } else {
        answer[1] += sum;
      }
    });
    // console.log(data, answer);

    if (sol[0] < answer[0]) {
      sol[0] = answer[0];
      sol[1] = answer[1];
    } else if (sol[0] == answer[0] && sol[1] < answer[1]) {
      sol[1] = answer[1];
    }
  });

  return sol;
}