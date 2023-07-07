#include <iostream>
#include <vector>
#include <algorithm>
#define ll long long
#define int ll
using namespace std;

signed main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    
    int N;
    cin >> N;
    
    vector<pair<int, int>> V(N);

    for (int i = 0; i < N; i++) {
        cin >> V[i].second;
        cin >> V[i].first;
    }

    sort(V.begin(), V.end());

    int result = 0;
    int end = 0;

    for (int i = 0; i < N; i++) {
        if (V[i].second >= end) {
            result++;
            end = V[i].first;
        }
    }

    cout << result << "\n";
}