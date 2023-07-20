import java.util.*;
import java.io.*;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());
		int M = Integer.parseInt(br.readLine());

		StringTokenizer st = new StringTokenizer(br.readLine());
		int[] numList = new int[N];

		for (int i = 0; i < N; i++) {
			numList[i] = Integer.parseInt(st.nextToken());
		}

		Arrays.sort(numList);

		int result = 0;
		int start = 0;
		int end = N - 1;

		while (start < end) {
			if (numList[start] + numList[end] < M) {
				start++;
			} else if (numList[start] + numList[end] > M) {
				end--;
			} else {
				result++;
				start++;
				end--;
			}
		}
		System.out.println(result);
	}

}