function spiralMatrix(n, m){
    let num =1;
    let finalNum = n * m;
    let arr = [];
    
    for (let a = 0; a < n; a++){
    arr.push([]);
    }
    
    let startRow = 0;
    let endRow = n-1;
    let startColumn = 0;
    let endColumn = n-1;
    
    while (startRow <= endRow && startColumn <= endColumn){
    
    for (let i = startColumn; i <= endColumn; i++){
    arr[startRow][i] = num;
    num++;
    }
    startRow++;
    
    for (let j = startRow; j <= endRow; j++){
    arr[j][endColumn] = num;
    num ++;
    }
    endColumn --;
    
    for (let k = endColumn; k >= startColumn; k--){
    arr[endRow][k] = num;
    num ++;
    }
    endRow --;
    
    for (let l = endRow; l >= startRow; l--){
    arr[l][startColumn] = num;
    num ++;
    }
    startColumn ++;
    
    }
    
    for (let q = 0; q < n; q++){
    console.log(arr[q].join(' '));
    }
    
    }

spiralMatrix(5,5 )