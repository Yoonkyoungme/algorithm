function solution(n, m, section) {
    let result = 0;
    let paint = 0;
    
    section.forEach((num, index) => {
        if (num > paint) {
            paint = num + m - 1;
            result++;
        }
    })
    
    return result;
}

