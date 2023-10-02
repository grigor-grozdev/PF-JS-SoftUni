function diagonal(input) {

    let arr = [];

    for (let i = 0; i < input.length; i++) {
        arr.push([]);
    }

    for (let j = 0; j < input.length; j++) {
        inp = input[j];
        arr[j] = inp.split(' ');
    }

    let startRow = 0;
    let endRow = arr.length - 1;
    let startColumn = 0;
    let endColumn = arr.length - 1;
    let sumR = 0;
    let sumL = 0;

    while (startRow <= endRow && startColumn <= endColumn) {

        let currentEl = Number(arr[startRow][startColumn]);
        sumR += currentEl
        startRow++;
        startColumn++;

    }

    startRow = 0;
    startColumn = 0;
    while (startRow <= endRow && startColumn <= endColumn) {

        let currentEl = Number(arr[startRow][endColumn]);
        sumL += currentEl
        startRow++;
        endColumn--;
    }

    if (sumR == sumL) {
        for (let m = 0; m < arr.length; m++) {
            for (let n = 0; n < arr.length; n++) {
                if (m != n && m + n != arr.length - 1) {
                    arr[m][n] = sumR;
                }
            }
            console.log(arr[m].join(' '));
        }
    } else {
        for (let p = 0; p < arr.length; p++) {
            console.log(input[p]);
        }
    }

}

diagonal(['1 1 1',
    '1 1 1',
    '1 1 0'])