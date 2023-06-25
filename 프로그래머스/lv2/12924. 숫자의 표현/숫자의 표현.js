function solution(n) {
    let result = 0;
    
    for (let i = 0; i < n - 1; i++) {
        let count = 0;
        for (let j = i + 1; j < n + 1; j++) {
            if (count > n) {
                break
            }
            else if (count === n) {
                result ++;
                break
            }
            count += j;
        }
    }
    return result + 1
}