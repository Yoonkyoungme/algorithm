function solution(n, computers) {
    let result = 0;
    let visited = new Array(n).fill(false);
    
    /**
    방문하지 않은 now node를 탐색한다.
    탐색할 node는 이어져있고, 방문한적 없는 노드이다.
    */
    function searchNextNode(now){
        visited[now] = true;
        for (let next = 0 ; next < n; next++){
            if (computers[now][next] === 1 && !visited[next]){
                searchNextNode(next);               
            }    
        }
    }
    
    for (let i = 0; i < n; i++){
        if (!visited[i]){
            visited[i] = true;
            searchNextNode(i);
            result += 1;        
        }  
    }
    return result;
}
