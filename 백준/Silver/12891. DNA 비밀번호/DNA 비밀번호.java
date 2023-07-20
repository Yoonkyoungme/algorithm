import java.util.*;
import java.io.*;

public class Main {
	static int checkArr[];
	static int curArr[];
	static int check;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int S = Integer.parseInt(st.nextToken());
		int P = Integer.parseInt(st.nextToken());
		int result = 0;
		char[] arr = new char[S];
		checkArr = new int[4];
		curArr = new int[4];
		check = 0;

		arr = br.readLine().toCharArray();
		st = new StringTokenizer(br.readLine());

		for (int i = 0; i < 4; i++) {
			checkArr[i] = Integer.parseInt(st.nextToken());
			if (checkArr[i] == 0)
				check++;
		}

		for (int i = 0; i < P; i++) {
			Add(arr[i]);
		}

		if (check == 4)
			result++;

		// 슬라이딩 윈도우 알고리즘 적용
		for (int i = P; i < S; i++) {
			int j = i - P;
			Add(arr[i]);
			Remove(arr[j]);

			if (check == 4)
				result++;
		}

		System.out.println(result);
		br.close();
	}

	private static void Remove(char c) {
		switch (c) {
		case 'A':
			if (checkArr[0] == curArr[0])
				check--;
			curArr[0]--;
			break;
		case 'C':
			if (checkArr[1] == curArr[1])
				check--;
			curArr[1]--;
			break;
		case 'G':
			if (checkArr[2] == curArr[2])
				check--;
			curArr[2]--;
			break;
		case 'T':
			if (checkArr[3] == curArr[3])
				check--;
			curArr[3]--;
			break;
		}
	}

	private static void Add(char c) {
		switch (c) {
		case 'A':
			curArr[0]++;
			if (checkArr[0] == curArr[0])
				check++;
			break;
		case 'C':
			curArr[1]++;
			if (checkArr[1] == curArr[1])
				check++;
			break;
		case 'G':
			curArr[2]++;
			if (checkArr[2] == curArr[2])
				check++;
			break;
		case 'T':
			curArr[3]++;
			if (checkArr[3] == curArr[3])
				check++;
			break;
		}
	}
}