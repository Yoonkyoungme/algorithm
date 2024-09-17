function solution(N, stages) {
    const failureRates = [];

    for (let i = 1; i <= N; i++) {
        const playersReachedStage = stages.filter(stage => stage >= i).length;
        const playersAtStage = stages.filter(stage => stage === i).length;
        const failureRate = playersReachedStage === 0 ? 0 : playersAtStage / playersReachedStage;
        
        failureRates.push([i, failureRate]);
    }
    
    failureRates.sort((a, b) => b[1] - a[1]);
    
    return failureRates.map(([stage]) => stage);
}
