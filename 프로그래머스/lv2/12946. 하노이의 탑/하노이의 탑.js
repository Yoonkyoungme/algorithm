function solution(n) {
    let result = [];
    
    function hanoi(n, start, mid, end){
        if (n === 1) result.push([start, end]);
        else {
            hanoi(n - 1, start, end, mid);
            result.push([start, end]);
            hanoi(n - 1, mid, start, end);
        }
    }
    
    hanoi(n, 1, 2, 3);
    return result;
}