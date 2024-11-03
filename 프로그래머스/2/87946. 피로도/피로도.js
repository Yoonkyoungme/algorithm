function solution(k, dungeons) {
    const N = dungeons.length;
    const visited = Array.from({length: N}).fill(false);
                                
    function backtrack(currentFatigue, visitedCount) {
        let maxCount = visitedCount;

        for (let i = 0; i < N; i++) {
            const [required, consume] = dungeons[i];

            if (!visited[i] && currentFatigue >= required) {
                visited[i] = true;
                maxCount = Math.max(
                    maxCount,
                    backtrack(currentFatigue - consume, visitedCount + 1)
                );
                visited[i] = false;
            }
        }
        
        return maxCount;
    }

    return backtrack(k, 0);
}
