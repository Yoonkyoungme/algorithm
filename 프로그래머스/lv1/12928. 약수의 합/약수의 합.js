function solution(n) {
    let count = 0;
    
    for(let i = 1; i <= n/2; i++){
        if (n % i === 0){
            count += i;
        }
    }
    
    return count + n;
}