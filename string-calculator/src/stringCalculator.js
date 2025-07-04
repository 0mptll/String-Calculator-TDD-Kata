function add(num)
{
    if(num === "")
        return 0;
    
    let delimiter = /,|\n/;

    if (num.startsWith('//')) {
        const [delim, rest] = num.split('\n');
        const rawDelimiter = delim.slice(2);
        const escaped = rawDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        delimiter = new RegExp(escaped);
        num = rest;
    }
    const parts = num.split(delimiter);

    for (let n of parts) {
        const value = parseInt(n, 10);
        if (value < 0) {
            throw new Error(`negative numbers not allowed: ${value}`);
        }
    }

    return parts.reduce((sum, n) => sum + parseInt(n, 10), 0);
    
}

module.exports = { add };