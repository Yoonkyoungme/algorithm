function solution(prices) {
    const totalPriceCount = prices.length;
    const results = Array.from({length: totalPriceCount}).fill(0);
    
    for (let i = 0; i < totalPriceCount; i++) {        
        for (let j = i + 1; j < totalPriceCount; j++) {
            results[i]++;
            if (prices[i] > prices[j]) {
                break;
            }
        }    
    }
    
    return results;
}