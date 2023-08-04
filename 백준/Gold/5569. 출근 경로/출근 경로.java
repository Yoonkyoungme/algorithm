import java.util.*;
import java.io.*;

public class Main {
	static int w, h;
	static int[][][][] dp;
	static final int MOD = 100000;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		w = Integer.parseInt(st.nextToken());
		h = Integer.parseInt(st.nextToken());

		dp = new int[h + 1][w + 1][2][2]; // 인덱스3: 방향(0-오른쪽, 1-위), 인덱스4: 방향 변경 여부(0-꺾지 않은 경우, 1-꺾은 경우)

		for (int i = 1; i <= h; i++) {
			dp[i][1][0][0] = 1;
		}
		for (int i = 1; i <= w; i++) {
			dp[1][i][1][0] = 1;
		}

		for (int i = 2; i <= h; i++) {
			for (int j = 2; j <= w; j++) {
				dp[i][j][0][0] = (dp[i - 1][j][0][0] + dp[i - 1][j][0][1]) % MOD;
				dp[i][j][0][1] = dp[i - 1][j][1][0] % MOD;
				dp[i][j][1][0] = (dp[i][j - 1][1][1] + dp[i][j - 1][1][0]) % MOD;
				dp[i][j][1][1] = dp[i][j - 1][0][0] % MOD;
			}
		}
		int result = (dp[h][w][0][0] + dp[h][w][0][1] + dp[h][w][1][0] + dp[h][w][1][1]) % MOD;
		System.out.println(result);
	}
}