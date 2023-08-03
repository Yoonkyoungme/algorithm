import java.util.*;
import java.io.*;

public class Main {
	static int V, E, start;
	static ArrayList adjList[];
	static int dist[];
	static final int INF = Integer.MAX_VALUE;

	static class Edge implements Comparable<Edge> {
		int targetId, cost;

		public Edge(int targetId, int cost) {
			this.targetId = targetId;
			this.cost = cost;
		}

		@Override
		public int compareTo(Edge o) {
			return this.cost - o.cost;
		}
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		StringTokenizer st = new StringTokenizer(br.readLine());
		StringBuilder sb = new StringBuilder();

		V = Integer.parseInt(st.nextToken());
		E = Integer.parseInt(st.nextToken());
		start = Integer.parseInt(br.readLine());
		dist = new int[V + 1];

		for (int i = 1; i <= V; i++) {
			dist[i] = INF;
		}

		adjList = new ArrayList[V + 1];
		for (int i = 1; i <= V; i++) {
			adjList[i] = new ArrayList<Edge>();
		}

		for (int i = 0; i < E; i++) {
			st = new StringTokenizer(br.readLine());
			int u = Integer.parseInt(st.nextToken());
			int v = Integer.parseInt(st.nextToken());
			int w = Integer.parseInt(st.nextToken());

			adjList[u].add(new Edge(v, w));
		}

		dijkstra(start);

		for (int i = 1; i <= V; i++) {
			if (dist[i] == INF) {
				sb.append("INF\n");
			} else {
				sb.append(dist[i] + "\n");
			}
		}
		bw.write(sb.toString());

		bw.flush();
		bw.close();
		br.close();
	}

	private static void dijkstra(int targetId) {
		PriorityQueue<Edge> pq = new PriorityQueue<Edge>();
		dist[targetId] = 0;
		pq.add(new Edge(targetId, dist[targetId]));

		while (!pq.isEmpty()) {
			Edge now = pq.poll();

			if (now.cost > dist[now.targetId]) {
				continue;
			}

			for (int i = 0; i < adjList[now.targetId].size(); i++) {
				Edge next = (Edge) adjList[now.targetId].get(i);

				if (dist[next.targetId] > now.cost + next.cost) {
					dist[next.targetId] = now.cost + next.cost;
					pq.add(new Edge(next.targetId, dist[next.targetId]));
				}
			}
		}
	}
}
