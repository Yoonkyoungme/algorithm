function solution(prices) {
    const totalPriceCount = prices.length;
    const results = Array.from({length: totalPriceCount}).fill(0);
    const stack = [];

    for (let i = 0; i < totalPriceCount; i++) {
        while (stack.length > 0 && prices[i] < prices[stack.at(-1)]) {
            const j = stack.pop();
            results[j] = i - j;
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const j = stack.pop();
        results[j] = totalPriceCount - 1 - j;
    }

    return results;
}
