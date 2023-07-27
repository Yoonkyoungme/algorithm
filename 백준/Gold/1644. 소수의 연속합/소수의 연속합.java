import java.io.*;
import java.util.*;

public class Main {
	static int N;
	static ArrayList<Integer> primeNumbers = new ArrayList<>();
	static int result;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();

		getPrimeNumber();
//		System.out.println(primeNumbers.toString());

		result = 0;
		getResult();

		System.out.println(result);
	}

	private static void getResult() {
		int start = 0;
		int end = 0;
		int sum = 0;

		while (true) {
			if (sum == N)
				result++;

			if (sum < N) {
				if (end >= primeNumbers.size())
					break;
				sum += primeNumbers.get(end++);
			} else
				sum -= primeNumbers.get(start++);
		}
	}

	private static void getPrimeNumber() {
		boolean primeNumberArr[] = new boolean[N + 1];
		// 소수면 false, 소수가 아니면 true
		primeNumberArr[0] = true;
		primeNumberArr[1] = true;

		for (int i = 2; i * i <= N; i++) {
			if (!primeNumberArr[i]) {
				for (int j = i * i; j <= N; j += i) {
					primeNumberArr[j] = true;
				}
			}
		}

		for (int i = 2; i < primeNumberArr.length; i++) {
			if (!primeNumberArr[i])
				primeNumbers.add(i);
		}
	}
}
