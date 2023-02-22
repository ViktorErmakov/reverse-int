module.exports = function reverse (n) {
    n = Math.max(n, -n);
    let arrStr = n.toString().split('');
    let str = arrStr.reverse().toString();
    let result = '';
    for (const char of str) {
        if(char === ','){
            continue
        }else{
            result += char;
        }
    }
    console.log(result);
    return Number(result);
}

module.exports(-192);
