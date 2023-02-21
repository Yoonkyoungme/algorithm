function solution(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let target = nums[i] + nums[j] + nums[k];
        if (isPrime(target)) result += 1;
      }
    }
  }

  function isPrime(target) {
    const arr = new Array(target + 1).fill(true).fill(false, 0, 2);

    for (let i = 2; i * i <= target; i++) {
      if (arr[i]) {
        for (let j = i * i; j <= target; j += i) arr[j] = false;
      }
    }

    if (arr[target] === true) return true;
    else return false;
  }
  return result;
}
