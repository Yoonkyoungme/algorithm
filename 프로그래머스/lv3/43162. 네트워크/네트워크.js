function solution(n, computers) {
    let result = 0;
    let dist = new Array(n).fill(false);
    
    function dfs(now){
        dist[now] = true;
        for (let next = 0 ; next < n; next++){
            if (computers[now][next] === 1 && !dist[next]){

                dfs(next);               
            }    
        }
        
    }
    
    for (let i = 0; i < n; i++){
        if (!dist[i]){
            dist[i] = true;
            dfs(i);
            result += 1;        
        }  
    }
    return result;
}

/*
	[1, 1, 0], 
    [1, 1, 0], 
    [0, 0, 1]
    
    0, 1 -> dfs(i) -> 1, 2
*/