import java.util.*;
import java.io.*;

public class Main {
	static int N, result;
	static int graph[][];
	static int dp[][];

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		StringTokenizer st;

		N = Integer.parseInt(br.readLine());
		graph = new int[N + 1][N + 1];
		dp = new int[N + 1][N + 1];

		for (int i = 1; i <= N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 1; j <= i; j++) {
				graph[i][j] = Integer.parseInt(st.nextToken());
			}
		}

		for (int i = 1; i <= N; i++) {
			for (int j = 1; j <= i; j++) {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + graph[i][j];
			}
		}

		result = 0;
		for (int i = 1; i <= N; i++) {
			if (dp[N][i] > result)
				result = dp[N][i];
		}

		bw.write(String.valueOf(result));

		bw.flush();
		br.close();
		bw.close();
	}
}