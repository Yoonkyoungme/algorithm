function solution(x, n) {
    let result = [];
    let plus = x;
    
    for (let i = 0; i < n; i++){
        result.push(plus)
        plus += x
    }
    return result
}