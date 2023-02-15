// 다익스트라 알고리즘

/* 
0번 노드는 사용하지 않는 빈 노드이다.
이는 시작 노드를 1번으로 설정하기 위함이다. 
*/

const graph = [
  [], // 사용X
  [
    { to: 2, cost: 1 },
    { to: 4, cost: 2 },
  ],
  [
    { to: 1, cost: 1 },
    { to: 3, cost: 3 },
    { to: 5, cost: 2 },
  ],
  [
    { to: 2, cost: 3 },
    { to: 5, cost: 1 },
  ],
  [
    { to: 1, cost: 2 },
    { to: 5, cost: 2 },
  ],
  [
    { to: 2, cost: 2 },
    { to: 3, cost: 1 },
    { to: 4, cost: 2 },
  ],
];

// 1번 노드와 각 노드까지 최단 경로를 저장하는 배열 생성
const dist = new Array(graph.length).fill(Infinity);

// 큐 생성 및 1번 노드에 대한 정보 저장
const queue = [{ to: 1, cost: 0 }];

// 1번 노드의 거리는 0 으로 설정
dist[1] = 0;

// 큐가 빌 때까지 반복
while (queue.length) {
  // 큐에서 방문할 노드 꺼내기
  const { to } = queue.pop();

  // 방문한 노드까지 이동한 거리 + 다음 방문 노드까지 거리
  graph[to].forEach((next) => {
    const acc = dist[to] + next.cost;

    if (dist[next.to] > acc) {
      dist[next.to] = acc;
      queue.push(next);
    }
  });
}

console.log(dist);
