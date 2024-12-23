function solution(participant, completion) {
    const map = new Map();    
    
    for (let i = 0; i < participant.length; i++) {
        const p = participant[i], c = completion[i];
        
        map.set(p, (map.get(p) || 0) + 1);
        map.set(c, (map.get(c) || 0) - 1);
    }
    
    for (const [name, count] of map) {
        if (count > 0) {
            return name;
        }
    }
}