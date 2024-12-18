function solution(progresses, speeds) {
    const results = [];
    const daysLeft = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));

    let count = 0;
    let maxDay = daysLeft[0];
    
    for (const left of daysLeft) {
        if (left <= maxDay) {
            count++;
        } else {
            results.push(count);
            count = 1;
            maxDay = left;
        }
    }
    
    results.push(count);
    return results;
}
