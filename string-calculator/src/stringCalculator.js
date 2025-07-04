function add(num)
{
    if(num === "")
        return 0;
    
    const parts = num.split(',');
    return parts.reduce((sum, n) => sum + parseInt(n), 0);
}

module.exports = { add };