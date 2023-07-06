#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main() {
  int N;
  int result = 0;

  cin >> N;
  vector<int> V(N);

  for (int i = 0; i < N; i++) {
    cin >> V[i];
  }

  sort(V.begin(), V.end());

  for (int i = 0; i < N; i++) {
    int left = 0;
    int right = N - 1;

    while (left < right) {
      if (left == i) {
        left++;
        continue;
      }
      if (right == i) {
        right--;
        continue;
      }
      
      if (V[i] > V[left] + V[right]) {
        left++;
      }
      else if (V[i] < V[left] + V[right]) {
        right--;
      }
      else {
        result++;
        break;
      }
    }
  }
  cout << result << "\n";
  return 0;
}