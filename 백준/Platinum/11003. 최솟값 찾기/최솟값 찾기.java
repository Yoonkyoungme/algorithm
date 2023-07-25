import java.util.*;
import java.io.*;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st = new StringTokenizer(br.readLine());

		int N = Integer.parseInt(st.nextToken());
		int L = Integer.parseInt(st.nextToken());
		ArrayDeque<Node> deque = new ArrayDeque<>();

		st = new StringTokenizer(br.readLine());
		for (int i = 0; i < N; i++) {
			int target = Integer.parseInt(st.nextToken());

			if (!deque.isEmpty() && deque.peekFirst().index <= i - L)
				deque.pollFirst();

			while (!deque.isEmpty() && deque.peekLast().value > target) {
				deque.pollLast();
			}
			deque.addLast(new Node(i, target));
			sb.append(deque.peekFirst().value).append(" ");
		}

		bw.write(sb.toString());
		bw.flush();
		bw.close();
		br.close();
	}

	static class Node {
		int index, value;

		public Node(int index, int value) {
			this.index = index;
			this.value = value;
		}
	}
}
