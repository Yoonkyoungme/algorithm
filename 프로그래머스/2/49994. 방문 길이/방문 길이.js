function solution(dirs) {
    const coordinate = {
        "U": [0, 1],
        "D": [0, -1],
        "R": [1, 0],
        "L": [-1, 0]
    };
    
    const visited = new Set();
    let currentPosition = [0, 0];
    
    for (let i = 0; i < dirs.length; i++) {
        const [x, y] = coordinate[dirs[i]];
        const [cx, cy] = currentPosition;
        const [nx, ny] = [cx + x, cy + y];
  
        if (nx <= 5 && nx >= -5 && ny <= 5 && ny >= -5) {
            const currentPath = `${cx},${cy},${nx},${ny}`;
            const reversePath = `${nx},${ny},${cx},${cy}`;
            
            visited.add(currentPath);
            visited.add(reversePath);
            
            currentPosition = [nx, ny];
        }
    }
    
    return visited.size / 2;
}
