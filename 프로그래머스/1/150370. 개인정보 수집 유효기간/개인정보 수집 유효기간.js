const PERIOD_DAYS = 28;

function convertDateToDays(date) {
    const [year, month, day] = date.split(".").map(Number);
    return year * 12 * PERIOD_DAYS + month * PERIOD_DAYS + day;
}

function solution(today, terms, privacies) {
    const expirationPeriod = {};
    
    terms.forEach((term) => {
        const [category, period] = term.split(" ");
        expirationPeriod[category] = period * PERIOD_DAYS;
    });
    
    const todayInDays = convertDateToDays(today);
    const results = [];
    
    privacies.forEach((privacy, index) => {
        const [collectionDate, category] = privacy.split(" ");
        const collectionInDays = convertDateToDays(collectionDate);
        
        const expirationInDays = collectionInDays + expirationPeriod[category];
        
        if (expirationInDays <= todayInDays) {
            results.push(index + 1);
        }
    });
    
    return results;
}

