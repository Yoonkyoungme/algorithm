function solution(begin, target, words) {
    let visited = [];
    let queue = [[begin, 0]]
    
    if (!words.includes(target)) return 0;
    
    while (queue.length){
        let [cur, count] = queue.pop();
        
        if (cur === target) return count;

        words.forEach((word, index) => {
            if (!visited.includes(word)){        
    
                let compare = 0;
                
                [...word].forEach((char, index) => {
                    if (compare > 1) return;
                    if (char !== cur[index]) compare += 1;
                })
                
                if (compare === 1){
                    visited.push(word);
                    queue.unshift([word, count + 1]);
                }
            }
        })
    }
}