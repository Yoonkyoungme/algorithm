function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n; // 가장 오래 걸리는 심사 시간 * 심사를 받아야 하는 총 인원 수
    let result = right;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const peopleCount = times.reduce((sum, time) => sum + Math.floor(mid / time), 0);
                
        if (peopleCount >= n) {
            result = mid;
            // n명 이상 심사할 수 있다면 시간을 줄여본다.
            right = mid - 1;
        } else {
            // n명을 심사할 수 없다면 시간을 늘려본다.
            left = mid + 1;
        }
    }
    
    return result;
}