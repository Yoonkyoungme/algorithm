import java.util.*;
import java.io.*;

public class Main {
	static int arr[][];
	static int minArr[][];
	static int maxArr[][];

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		int N = Integer.parseInt(st.nextToken());
		arr = new int[N + 1][3];
		minArr = new int[N + 1][3];
		maxArr = new int[N + 1][3];

		for (int i = 1; i <= N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < 3; j++) {
				arr[i][j] = Integer.parseInt(st.nextToken());
			}
		}

		for (int i = 1; i <= N; i++) {
			minArr[i][0] = Math.min(minArr[i - 1][0], minArr[i - 1][1]) + arr[i][0];
			minArr[i][1] = Math.min(Math.min(minArr[i - 1][0], minArr[i - 1][1]), minArr[i - 1][2]) + arr[i][1];
			minArr[i][2] = Math.min(minArr[i - 1][1], minArr[i - 1][2]) + arr[i][2];

			maxArr[i][0] = Math.max(maxArr[i - 1][0], maxArr[i - 1][1]) + arr[i][0];
			maxArr[i][1] = Math.max(Math.max(maxArr[i - 1][0], maxArr[i - 1][1]), maxArr[i - 1][2]) + arr[i][1];
			maxArr[i][2] = Math.max(maxArr[i - 1][1], maxArr[i - 1][2]) + arr[i][2];
		}

		int minResult = Integer.MAX_VALUE;
		int maxResult = 0;

		for (int i = 0; i < 3; i++) {
			minResult = Math.min(minResult, minArr[N][i]);
			maxResult = Math.max(maxResult, maxArr[N][i]);
		}

		System.out.println(maxResult + " " + minResult);
	}
}