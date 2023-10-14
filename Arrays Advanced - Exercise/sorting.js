function sorting(arr) {
    let result = [];
    let sortedArr = arr.sort((a, b) => a - b);
    while (sortedArr.length > 0) {
        maxNum = sortedArr.pop();
        minNum = sortedArr.shift();
        result.push(maxNum, minNum);
    }
    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31,
    2, 18, 94])