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
let startRow = x+1;
let startColumn = y+1;
//let endRow = x+1;
//let endColumn = y+1;

while (startRow < height && startColumn < width){

for (let j = 0; j <= startColumn; j++ ){
    arr[startRow][j] = num;
    arr[j][startColumn] = num;
    }
num++;
startRow++;
startColumn++;
}

for (let p = 0; p < arr.length; p++) {
    console.log(arr[p].join(' '));
}
}

orbit([7, 7,
    0, 0])