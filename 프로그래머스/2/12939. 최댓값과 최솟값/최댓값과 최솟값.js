function solution(s) {
    let min = Infinity;
    let max = -Infinity;
    
    s.split(" ").forEach((str) => {       
        const num = Number(str);
        
        if (num < min) min = num;
        if (num > max) max = num;
    })
    
    return `${min} ${max}`
}