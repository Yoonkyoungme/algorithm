function solution(s) {
    const result = [];
    const tuples = s.slice(2, -2).split("},{").sort((a, b) => a.length - b.length);
    
    tuples.forEach((data) => {
        const elements = data.split(',');
        elements.forEach((element) => {
            result.push(parseInt(element));
        });
    });
    
    return [...new Set(result)];
}