import java.util.*;
import java.io.*;

public class Main {
	static int n, m, result;
	static int dp[][];

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());
		result = 0;
		dp = new int[n + 1][m + 1];

		for (int i = 1; i <= n; i++) {
			String line[] = br.readLine().split("");
			for (int j = 1; j <= m; j++) {
				int cur = Integer.parseInt(line[j - 1]);

				if (cur == 1) {
					// [왼쪽, 위, 왼쪽 대각선 위] 값 중 가장 작은 값 + 1
					dp[i][j] = Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]) + 1;
					result = Math.max(result, dp[i][j]);
				}
			}
		}
		System.out.println((int) Math.pow(result, 2));
	}
}
