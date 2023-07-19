import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int count = 1;
		int start_index = 1;
		int end_index = 1;
		int sum = 1;

		while (end_index != N) {
			if (sum == N) {
				count++;
				end_index++;
				sum = sum + end_index;
			} else if (sum > N) {
				sum = sum - start_index;
				start_index++;
			} else {
				end_index++;
				sum = sum + end_index;
			}
		}
		
		System.out.println(count);
	}
}
