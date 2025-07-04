function add(num)
{
    if(num === "")
        return 0;
    
    let delimiter = /,|\n/;

    if (num.startsWith('//')) 
    {
        const [delim, rest] = num.split('\n');
        const rawDelimiter = delim.slice(2);
        const escaped = rawDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        delimiter = new RegExp(escaped);
        num = rest;
    }
    const parts = num.split(delimiter);
    const parsed = parts.map(n => parseInt(n, 10));

    const negatives = parsed.filter(n => n < 0);
    if (negatives.length > 0) 
    {
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }

    return parsed.reduce((sum, n) => sum + n, 0);

    
}

module.exports = { add };