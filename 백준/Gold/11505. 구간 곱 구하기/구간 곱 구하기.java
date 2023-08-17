import java.util.*;
import java.io.*;

public class Main {
	static int N, M, K, offset;
	static long indexedTree[];
	static final int MOD = 1_000_000_007;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st = new StringTokenizer(br.readLine());

		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		K = Integer.parseInt(st.nextToken());

		for (offset = 1; offset < N; offset *= 2)
			;
		indexedTree = new long[offset * 2];

		// 데이터 입력
		for (int i = 0; i < N; i++) {
			indexedTree[offset + i] = Integer.parseInt(br.readLine());
		}

		// 구간합 데이터
		for (int i = offset - 1; i > 0; i--) {
			indexedTree[i] = (indexedTree[i * 2] * indexedTree[i * 2 + 1]) % MOD;
		}

		for (int i = 0; i < M + K; i++) {
			st = new StringTokenizer(br.readLine());
			int type = Integer.parseInt(st.nextToken());
			int num1 = Integer.parseInt(st.nextToken());
			int num2 = Integer.parseInt(st.nextToken());

			if (type == 1) {
				update(num1, num2);
			} else if (type == 2) {
				sb.append(mul(num1, num2)).append("\n");
			}
		}
		bw.write(sb.toString());
		bw.flush();
		bw.close();
		br.close();
	}

	private static long mul(int start, int end) {
		start += offset - 1;
		end += offset - 1;
		long result = 1;

		while (start <= end) {
			if (start % 2 == 1) {
				result = (result * indexedTree[start++]) % MOD;
			}
			if (end % 2 == 0) {
				result = (result * indexedTree[end--]) % MOD;
			}
			start /= 2;
			end /= 2;
		}
		return result;
	}

	private static void update(int index, int value) {
		index += offset - 1;
		indexedTree[index] = value;

		while (index > 1) {
			index /= 2;
			indexedTree[index] = (indexedTree[index * 2] * indexedTree[index * 2 + 1]) % MOD;
		}
	}
}