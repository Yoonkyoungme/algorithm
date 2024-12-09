function solution(arr) {
    const results = [];
    
    let prev = null;
    
    for (const cur of arr) {
        if (prev !== cur) {
            results.push(cur);
            prev = cur;
        }
    }
    
    return results;
}