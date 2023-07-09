function solution(people, limit) {
    people.sort((a, b) => a - b);
    let answer = 0;
    let left = 0;
    let right = people.length - 1;
    
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
            right--;
        } else {
            right--;
        }
        answer++;
    }
    
    return answer;
}
