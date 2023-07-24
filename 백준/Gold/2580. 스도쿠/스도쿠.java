import java.io.*;
import java.util.*;

public class Main {

	static class Location {
		int y, x;

		public Location(int y, int x) {
			this.y = y;
			this.x = x;
		}
	}

	static int[][] map = new int[9][9];

	static ArrayList<Location> zeroList;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		zeroList = new ArrayList<Location>();

		for (int i = 0; i < 9; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			for (int j = 0; j < 9; j++) {

				map[j][i] = Integer.parseInt(st.nextToken());
				if (map[j][i] == 0) {
					zeroList.add(new Location(j, i));
				}
			}
		}

		sudoku(0);
	}

	static void sudoku(int cur) {
		if (cur == zeroList.size()) {
			for (int i = 0; i < 9; i++) {
				for (int j = 0; j < 9; j++) {
					System.out.print(map[j][i] + " ");
				}
				System.out.println();
			}
			System.exit(0);
		}

		Location curLoc = zeroList.get(cur);
		for (int i = 1; i <= 9; i++) {
			if (check(curLoc.y, curLoc.x, i)) {
				map[curLoc.y][curLoc.x] = i;
				sudoku(cur + 1);

			}
			map[curLoc.y][curLoc.x] = 0;
		}

	}

	private static boolean check(int y, int x, int value) {
		// 행, 열 검사
		for (int i = 0; i < 9; i++) {
			if (map[i][x] == value)
				return false;
			if (map[y][i] == value)
				return false;
		}

		// 3 * 3 검사
		int nx = x / 3 * 3;
		int ny = y / 3 * 3;
		for (int i = ny; i < ny + 3; i++) {
			for (int j = nx; j < nx + 3; j++) {
				if (map[i][j] == value)
					return false;
			}
		}
		return true;

	}

}