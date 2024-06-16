const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const cardNumbers = input[1].split(' ').map(Number);

let result = 0;

cardNumbers.sort((a, b) => a - b);

for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
        for (let k = j + 1; k < N; k++) {
            const sum = cardNumbers[i] + cardNumbers[j] + cardNumbers[k];
            if (sum > M) {
                break;
            }
            
            if (sum > result) {
                result = sum;
            }
        }
    }
}

console.log(result);
