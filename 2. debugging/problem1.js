function series(start, limit, step) {
    let str = "" + start;
    for (let i = start + step; i <= limit;i =i+step) {
        str += "," + i;
    }
    return str;
}

console.log(series(1, 10, 3)); // should give "1, 3, 5, 7, 9".