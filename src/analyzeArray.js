function analyzeArray(arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    arr.forEach((element) => {
        sum += element;
        if (element < min) min = element;
        if (element > max) max = element;
    });
    const length = arr.length;
    const average = (typeof min === 'undefined') ? undefined : sum / length;
    return { average, min, max, length };
}

module.exports = analyzeArray;
