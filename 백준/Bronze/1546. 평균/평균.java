import java.util.*;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int N = sc.nextInt();
    int score[] = new int[N];

    for (int i = 0; i < N; i++) {
      score[i] = sc.nextInt();
    }

    int max = 0;
    float sum = 0;
    for (int num : score) {
      if (max < num) max = num;
      sum += num;
    }

    System.out.println(sum / max * 100 / N);
  }
}