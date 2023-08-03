import java.util.*;
import java.io.*;

public class Main {
	static int n, m;
	static int type, a, b;
	static int parents[];

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		StringTokenizer st = new StringTokenizer(br.readLine());
		StringBuilder sb = new StringBuilder();

		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());
		parents = new int[n + 1];
		
		for (int i = 1; i <= n; i++) {
			parents[i] = i;
		}

		for (int i = 1; i <= m; i++) {
			st = new StringTokenizer(br.readLine());
			type = Integer.parseInt(st.nextToken());
			a = Integer.parseInt(st.nextToken());
			b = Integer.parseInt(st.nextToken());

			// 합집합(0)일 경우 union
			if (type == 0) {
				union(a, b);
			}

			// 같은 집합인지 확인(1)하는 경우 find
			else if (type == 1) {
				if (find(a) == find(b)) {
					bw.write("YES\n");
				} else {
					bw.write("NO\n");
				}
			}
		}

		bw.write(sb.toString());

		br.close();
		bw.flush();
		bw.close();
	}

	// 합집합(union)
	private static int union(int a, int b) {
		int n1 = find(a); // a의 부모 찾기
		int n2 = find(b); // b의 부모 찾기
		return n1 < n2 ? (parents[n2] = n1) : (parents[n1] = n2);
	}

	// 같은 집합인지 확인
	private static int find(int id) {
		if (parents[id] == id)
			return id;
		return parents[id] = find(parents[id]);
	}
}