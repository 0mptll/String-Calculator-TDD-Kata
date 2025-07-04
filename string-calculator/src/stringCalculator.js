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
    return parts.reduce((sum, n) => sum + parseInt(n, 10), 0);

    
}

module.exports = { add };