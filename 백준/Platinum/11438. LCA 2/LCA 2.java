import java.util.*;
import java.io.*;

public class Main {
	static int N, M;
	static int K = -1;
	static int parent[][];
	static ArrayList graph[];
	static int depth[];

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;

		N = Integer.parseInt(br.readLine());
		graph = new ArrayList[N + 1];

		for (int i = 1; i <= N; i++) {
			graph[i] = new ArrayList<Integer>();
		}

		int a, b;

		for (int i = 1; i <= N - 1; i++) {
			st = new StringTokenizer(br.readLine());
			a = Integer.parseInt(st.nextToken());
			b = Integer.parseInt(st.nextToken());
			graph[a].add(b);
			graph[b].add(a);
		}

		// 1. 2^K에서 K 찾기
		// 2^K >= N인 첫번째 K 찾기, 문제조건 : N >= 2, K를 -1부터 시작해야 아래 값이 나옴
		// N이 17이면 2^4 번째 조상까지 기록 필요 17 = 2^4 + 2^0
		// N이 16이면 2^4 번째 조상까지 기록 필요 16 = 2^4
		// N이 15이면 2^3 번째 조상까지 기록 필요 15 = 2^3 + 2^2 + 2^1 + 2^0
		for (int i = 1; i <= N; i *= 2) {
			K++;
		}

		parent = new int[K + 1][N + 1];
		depth = new int[N + 1];
		

		// 2. dfs 돌면서 depth 확인, 1번째 부모 (parent[0][V]) 기록
		dfs(1, 1); // id, cnt(현재 depth 기록)

		// 3. parent 채우기 = 2^K번째 부모 기록
		fillParent();

		// 4. LCA(int a, int b) : a와 b의 최소공통조상 return
		M = Integer.parseInt(br.readLine());

		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(br.readLine());
			a = Integer.parseInt(st.nextToken());
			b = Integer.parseInt(st.nextToken());
			sb.append(LCA(a, b) + "\n");
		}

		bw.write(sb.toString());
		bw.flush();
		br.close();
		bw.close();
	}

	private static void dfs(int id, int cnt) {
		// 1) 현재 정점 depth 기록
		depth[id] = cnt;

		// 2) 자식들의 depth 기록
		for (int i = 0; i < graph[id].size(); i++) {
			int next = (int) graph[id].get(i);
			if (depth[next] == 0) {
				// 첫번째 부모 기록, 다음 노드로 dfs 진행
				parent[0][next] = id; // 첫번째 부모를 기록 (2^0)
				dfs(next, cnt + 1);
			}
		}
		return;
	}

	// 2^K번째 부모 기록 (DP를 이용해 각 노드별 2^K 번 째 조상 노드를 저장한다.)
	private static void fillParent() {
		for (int i = 1; i <= K; i++) {
			for (int j = 1; j <= N; j++) {
				parent[i][j] = parent[i - 1][parent[i - 1][j]];
			}
		}
	}

	// 최소공통조상 찾기
	private static int LCA(int a, int b) {
		// 깊이가 낮은 쪽을 기준으로 맞춘다.
		if (depth[a] < depth[b]) {
			int temp = a;
			a = b;
			b = temp;
		}

		// 더 깊은 a를 2승씩 점프하며 두 노드의 depth를 맞춘 후, 맞춘 depth의 조상 노드로 대체한다.
		for (int i = K; i >= 0; i--) {
			if (Math.pow(2, i) <= depth[a] - depth[b]) {
				a = parent[i][a];
			}
		}

		// depth 맞춘 후 대체한 조상 노드가 b와 같다면. 즉, a의 조상노드가 b라면 종료한다.
		if (a == b)
			return a;

		// 두 노드는 같은 depth를 가지기 때문에 2^K승 점프하며 공통부모 바로 아래까지 올리기 (공통조상 중 최솟값을 찾기 위해서)
		for (int i = K; i >= 0; i--) {
			if (parent[i][a] != parent[i][b]) {
				a = parent[i][a];
				b = parent[i][b];
			}
		}

		// 공통부모 바로 아래에서 반복문이 끝났으므로 첫번째 부모 (2^0) 리턴
		return parent[0][a];
	}
}
