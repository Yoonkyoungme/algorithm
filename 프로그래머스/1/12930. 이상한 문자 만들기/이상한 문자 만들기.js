function solution(s) {
    let result = "";
    let index = 0;
    
    for (const char of s) {
        if (char === " ") {
            result += " ";
            index = 0;
        } else {
            if (index % 2 === 0) {
                result += char.toUpperCase();
            } else {
                result += char.toLowerCase();
            }
            
            index++;
        }
    }

    return result;
}