function solution(dirs) {
    const dist = {
        "U": [1, 0],
        "D": [-1, -0],
        "R": [0, 1],
        "L": [0, -1]
    };
    
    let pos = [0, 0];
    let visit = new Set();
    
    for (let dir of dirs) {
        let nx = pos[1] + dist[dir][1];
        let ny = pos[0] + dist[dir][0];
        
        if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;
        visit.add(`${pos[0]}${pos[1]}${ny}${nx}`);
        visit.add(`${ny}${nx}${pos[0]}${pos[1]}`);
        pos = [ny, nx];
    }
    
    return visit.size / 2;
}