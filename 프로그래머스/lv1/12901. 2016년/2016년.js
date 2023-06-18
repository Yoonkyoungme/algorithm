function solution(a, b) {
    const date = new Date(`2016-${a}-${b}`);
    return date.toString().slice(0, 3).toUpperCase();
}