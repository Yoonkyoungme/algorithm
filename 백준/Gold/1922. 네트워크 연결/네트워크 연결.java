import java.util.*;
import java.io.*;

class Node implements Comparable<Node> {
	int a, b, cost;

	Node(int a, int b, int cost) {
		this.a = a;
		this.b = b;
		this.cost = cost;
	}

	@Override
	public int compareTo(Node o) {
		return this.cost - o.cost;
	}
}

public class Main {
	static int N, M;
	static int parents[];
	static PriorityQueue<Node> pq;
	static int result;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		StringTokenizer st;
		pq = new PriorityQueue<Node>();

		N = Integer.parseInt(br.readLine());
		M = Integer.parseInt(br.readLine());

		parents = new int[N + 1];
		for (int i = 1; i <= N; i++) {
			parents[i] = i;
		}

		for (int i = 1; i <= M; i++) {
			st = new StringTokenizer(br.readLine());
			int a = Integer.parseInt(st.nextToken());
			int b = Integer.parseInt(st.nextToken());
			int cost = Integer.parseInt(st.nextToken());
			pq.offer(new Node(a, b, cost));
		}

		while (!pq.isEmpty()) {
			Node node = pq.poll(); // 최소 비용 간선부터 꺼냄

			// 사이클이 아닌 노드만 합침
			if (find(node.a) != find(node.b)) {
				union(node.a, node.b);
				result += node.cost;
			}
		}

		System.out.println(result);
		br.close();
		bw.flush();
		bw.close();
	}

	private static int union(int a, int b) {
		int n1 = find(a);
		int n2 = find(b);
		return n1 < n2 ? (parents[n2] = n1) : (parents[n1] = n2);
	}

	private static int find(int id) {
		if (parents[id] == id)
			return id;
		return parents[id] = find(parents[id]);
	}
}