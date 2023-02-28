function solution(n, arr1, arr2) {
  let result = [];

  for (let i = 0; i < n; i++) {
    let num = (arr1[i] | arr2[i]).toString(2).padStart(n, 0).replace(/1/g, "#").replace(/0/g, " ");
      
    result.push(num);
  }

  return result;
}
