exports.min = function min(array) {
    if (!Array.isArray(array) || array.length < 1) return 0;
    const result = Math.min(...array);
    return result;
};

exports.max = function max(array) {
    if (!Array.isArray(array) || array.length < 1) return 0;
    const result = Math.max(...array);
    return result;
};

exports.avg = function avg(array) {
    if (!Array.isArray(array) || array.length < 1) return 0;
    const summ = array.reduce((acc, item) => acc + item);
    const result = summ / array.length;
    return result;
};
