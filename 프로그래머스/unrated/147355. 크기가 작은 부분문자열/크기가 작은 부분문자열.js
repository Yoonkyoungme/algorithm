function solution(t, p) {
    const pLen = p.length;
    let result = 0;
    let arr = [];
    
    for (let i = 0; i < t.length - pLen + 1; i++){
       arr.push(t.slice(i, i + pLen));
    }
    
    arr.forEach((data, index) => {
    if (parseInt(data) <= parseInt(p)) result += 1;
    })
    
    return result;
}
