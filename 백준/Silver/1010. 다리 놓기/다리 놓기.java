import java.util.*;
import java.io.*;

public class Main {
	static int T, N, M;
	static int dp[][];

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		StringTokenizer st = new StringTokenizer(br.readLine());
		StringBuilder sb = new StringBuilder();

		T = Integer.parseInt(st.nextToken());

		for (int i = 0; i < T; i++) {
			st = new StringTokenizer(br.readLine());

			// N <= M
			N = Integer.parseInt(st.nextToken()); // 서쪽 사이트
			M = Integer.parseInt(st.nextToken()); // 동쪽 사이트
			dp = new int[M + 1][N + 1];

			sb.append(BC(M, N) + "\n");
		}
		System.out.println(sb.toString());
	}

	static int BC(int m, int n) {
		if (dp[m][n] > 0) {
			return dp[m][n];
		}

		if (n == 0 || m == n) {
			return dp[m][n] = 1;
		}

		return dp[m][n] = BC(m - 1, n - 1) + BC(m - 1, n);
	}
}