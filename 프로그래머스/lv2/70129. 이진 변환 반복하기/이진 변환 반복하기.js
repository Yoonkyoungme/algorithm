function solution(s) {
    let removedZeros = 0;
    let count = 0;
    
    while (s !== "1") {
        const newArray = s.replaceAll("0", "");
        removedZeros += s.length - newArray.length;
        s = newArray.length.toString(2);
        count++;
    }
    
    return [count, removedZeros];
}
