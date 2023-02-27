function solution(s) {
    let result = '';
    numberList = s.split(" ").map(Number).sort((a, b) => a - b);
    result += `${numberList[0]} ${numberList[numberList.length - 1]}`
    return result;
}