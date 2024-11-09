/**
 * @param {number[]} prices
 * @return {number} - maximum profit
 */
const maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (price of prices) {
        if (price < minPrice) {
            minPrice = price;
        }

        profit = price - minPrice;

        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
}

