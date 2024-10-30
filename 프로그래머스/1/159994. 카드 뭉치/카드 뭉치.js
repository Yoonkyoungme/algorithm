function solution(cards1, cards2, goal) {
    let pos1 = 0;
    let pos2 = 0;
    
    for (let word of goal) {
        if (cards1[pos1] === word) {
            pos1++;
        } else if (cards2[pos2] === word) {
            pos2++;
        } else {
            return "No";
        }
    }
    
    return "Yes";
}