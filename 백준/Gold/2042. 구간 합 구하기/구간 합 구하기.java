import java.util.*;
import java.io.*;

public class Main {
	static int N, M, K, offset;
	static long indexTree[];

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

		indexTree = new long[offset * 2 + 2];

		for (int i = 0; i < N; i++) {
			indexTree[offset + i] = Long.parseLong(br.readLine());
		}

		for (int i = offset - 1; i > 0; i--) {
			indexTree[i] = indexTree[i * 2] + indexTree[i * 2 + 1];
		}

		for (int i = 1; i <= M + K; i++) {
			st = new StringTokenizer(br.readLine());
			int type = Integer.parseInt(st.nextToken());

			if (type == 1) {
				int index = Integer.parseInt(st.nextToken());
				long value = Long.parseLong(st.nextToken());
				update(index - 1, value);
			} else if (type == 2) {
				int start = Integer.parseInt(st.nextToken());
				int end = Integer.parseInt(st.nextToken());
				long result = sum(start - 1, end - 1);
				sb.append(result).append("\n");
			}
		}
		bw.write(sb.toString());
		bw.flush();
		bw.close();
	}

	private static long sum(int start, int end) {
		start += offset;
		end += offset;
		long result = 0;

		while (start <= end) {
			if (start % 2 == 1)
				result += indexTree[start++];
			if (end % 2 == 0)
				result += indexTree[end--];
			start /= 2;
			end /= 2;
		}
		return result;
	}

	private static void update(int index, long value) {
		index += offset;
		indexTree[index] = value;

		while (index > 1) {
			index /= 2;
			indexTree[index] = indexTree[index * 2] + indexTree[index * 2 + 1];
		}
	}
}
