import java.util.*;
import java.io.*;

public class Main {
	static int N, M;
	static int[] indegree;
	static ArrayList<ArrayList<Integer>> edges = new ArrayList<>();
	static Queue<Integer> q;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		StringTokenizer st = new StringTokenizer(br.readLine());
		StringBuilder sb = new StringBuilder();

		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());

		indegree = new int[N + 1];
		q = new ArrayDeque<>();

		for (int i = 0; i <= N; i++) {
			edges.add(new ArrayList<Integer>());
		}

		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(br.readLine());
			int start = Integer.parseInt(st.nextToken());
			int end = Integer.parseInt(st.nextToken());
			indegree[end]++;
			edges.get(start).add(end);
		}

		for (int i = 1; i <= N; i++)
			if (indegree[i] == 0)
				q.add(i);

		while (!q.isEmpty()) {
			int num = q.poll();

			bw.write(num + " ");

			for (int i = 0; i < edges.get(num).size(); i++) {
				int curr = edges.get(num).get(i);
				indegree[curr]--;
				if (indegree[curr] == 0)
					q.add(curr);
			}
		}

		br.close();
		bw.flush();
		bw.close();
	}
}
