function orbit(input) {
    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];

    let arr = [];

    for (let i = 0; i < height; i++) {
        arr.push([]);
    }
    arr[x][y] = 1;

    let num = 2;
    let startRow = y - 1;
    let startColumn = x - 1;
    let endRow = y + 1;
    let endColumn = x + 1;

    while ((startRow >= 0 || endRow < height) && (startColumn >= 0 || endColumn < width)) {
        if (startRow >= 0) {
            for (let j = startColumn; j <= endColumn; j++) {
                arr[startRow][j] = num;
            }
        } else {
            startRow = 0;
        }

        if (endColumn < width) {
            for (let k = startRow; k <= endRow; k++) {
                arr[k][endColumn] = num;
            }
        } else {
            endColumn = width - 1;
        }

        if (endRow < height) {
            for (let l = endColumn; l >= startColumn; l--) {
                arr[endRow][l] = num;
            }
        } else {
            endRow = height - 1;
        }

        if (startColumn >= 0) {
            for (let m = endRow; m >= startRow; m--) {
                arr[m][startColumn] = num;
            }
        } else {
            startColumn = 0;
        }
        num++;
        startRow--
        endRow++
        startColumn--
        endColumn++
    }

    for (let p = 0; p < arr.length; p++) {
        console.log(arr[p].join(' '));
    }
}

orbit([5, 5,
    4, 4])