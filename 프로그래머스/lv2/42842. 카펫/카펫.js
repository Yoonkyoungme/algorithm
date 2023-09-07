function solution(brown, yellow) {
    const total = brown + yellow;
    
    for (let row = 3; row <= brown; row++) {
        if (total % row !== 0) continue;
        const col = total / row;
        const countYellow = (row - 2) * (col - 2);
        if (row >= col && countYellow === yellow) return [row, col];
    }
}

