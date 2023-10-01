function nonDecreasingSubset(arr){
for (let i = 1; i < arr.length; i++){
    if(arr[i] < arr[i-1]){
        arr.splice(i,1);
        i--;
    } else if (arr[i] == arr[i-1]){
        arr.splice(i-1,1);
        i--;
    }
}
console.log(arr.join(' '));
}

nonDecreasingSubset([20, 3, 2, 20, 15, 6, 1] );