function searchForANumber(arr, input) {

    let modifiedArr = arr.slice(0, input[0]);
    
    modifiedArr.splice(0, input[1]);
    
    let count = 0;
    for (let num of modifiedArr) {
        if (num == input[2]) {
            count++
        }
    }
    console.log(`Number ${input[2]} occurs ${count} times.`);
}

searchForANumber([5, 2, 1, 4, 2, 6],
    [5, 2, 3])
