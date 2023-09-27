function solution(number, k) {
    const stack = [];
    
    for (let cur of number) {
        while (k > 0 && stack.length > 0 && stack.at(-1) < cur) {
            stack.pop();
            k--;
        }
        stack.push(cur);
    }
    
    // 만약 k가 남아있다면 뒤에서부터 제거
    stack.splice(stack.length - k, k);
    
    return stack.join("");
}