function solution(t, p) {
    const pLen = p.length;
    let result = 0;
    
    for (let i = 0; i < t.length - pLen + 1; i++){
       const cur = parseInt(t.slice(i, i + pLen));
        
        if (cur <= parseInt(p)) result += 1;
    }

    
    return result;
}
