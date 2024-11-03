function solution(numbers) {
    const results = Array.from({length: numbers.length}).fill(-1);
    const stack = [];
    
    numbers.forEach((number, index) => {
        while(stack && numbers[stack.at(-1)] < number) {
            results[stack.pop()] = number;
        }
        stack.push(index);
    })
    
    return results;
}