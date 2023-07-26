import java.util.*;
import java.io.*;

public class Main {
	static int N, M, K;
	static int offset;
	static long indexedTree[];

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st = new StringTokenizer(br.readLine());

		N = Integer.parseInt(st.nextToken()); // 수의 개수
		M = Integer.parseInt(st.nextToken()); // 변경이 일어나는 횟수
		K = Integer.parseInt(st.nextToken()); // 구간의 합을 구하는 횟수

		// offset 구하기
		for (offset = 1; offset < N; offset *= 2)
			;

		// 인덱스트리 크기 특정
		indexedTree = new long[offset * 2 + 2];

		// 인덱스트리에 데이터 입력
		for (int i = 0; i < N; i++) {
			indexedTree[offset + i] = Long.parseLong(br.readLine());
		}

		// 구간합 데이터 만들기
		for (int i = offset - 1; i > 0; i--) {
			indexedTree[i] = indexedTree[i * 2] + indexedTree[i * 2 + 1];
		}

		// 인덱스트리 숫자 변경 및 구간합 구해서 출력
		for (int i = 1; i <= M + K; i++) {
			st = new StringTokenizer(br.readLine());

			int type = Integer.parseInt(st.nextToken());

			if (type == 1) {
				int idx = Integer.parseInt(st.nextToken());
				long value = Long.parseLong(st.nextToken());
				update(idx, value);
			}

			else {
				int start = Integer.parseInt(st.nextToken());
				int end = Integer.parseInt(st.nextToken());
				long result = sum(start, end);
				sb.append(result + "\n");
			}
		}
		System.out.println(sb.toString());
	}

	private static long sum(int start, int end) {
		start = start - 1 + offset;
		end = end - 1 + offset;

		long result = 0;

		while (start <= end) {
			if (start % 2 == 1)
				result += indexedTree[start];
			if (end % 2 == 0)
				result += indexedTree[end];

			start = (start + 1) / 2;
			end = (end - 1) / 2;
		}
		return result;
	}

	private static void update(int idx, long value) {
		idx = idx - 1 + offset;
		indexedTree[idx] = value;

		while (idx > 1) {
			idx /= 2;
			indexedTree[idx] = indexedTree[idx * 2] + indexedTree[idx * 2 + 1];
		}
	}

}
