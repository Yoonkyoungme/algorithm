function solution(numbers) {
    const result = Array(numbers.length).fill(-1);
    const stack = [];
    
    for (let i = 0; i < numbers.length; i++) {
        while (stack && numbers[stack.at(-1)] < numbers[i]) {
            result[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    return result;
}