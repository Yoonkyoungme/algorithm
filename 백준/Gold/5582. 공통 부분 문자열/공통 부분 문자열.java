import java.util.*;
import java.io.*;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String words1 = br.readLine();
		String words2 = br.readLine();

		int len1 = words1.length();
		int len2 = words2.length();

		int arr[][] = new int[len1 + 1][len2 + 1];
		int result = 0;

		for (int i = 1; i <= len1; i++) {
			for (int j = 1; j <= len2; j++) {
				if (words1.charAt(i - 1) == words2.charAt(j - 1)) {
					arr[i][j] = arr[i - 1][j - 1] + 1;
					result = Math.max(result, arr[i][j]);
				}
			}
		}
		System.out.println(result);
	}
}