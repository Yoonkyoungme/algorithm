function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a.at(n) > b.at(n)) return 1;
        else if (a.at(n) < b.at(n)) return -1;
        else return a > b ? 1: -1;
    });
}