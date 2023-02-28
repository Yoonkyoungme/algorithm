function fibo(n){
    let fiboList = [0, 1];
    for (let i = 2; i <= n; i++){
        fiboList[i] = (fiboList[i - 2] + fiboList[i - 1]) % 1234567;
    }
    return fiboList[n]; 
}

function solution(n) {
    return fibo(n) % 1234567;
}
