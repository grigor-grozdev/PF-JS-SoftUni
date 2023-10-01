function magicMatrices(arr){
 for (let i = 0; i < arr.length; i++){
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++){
        sum += arr[i][j];
    }
    console.log(sum)
 }

}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])