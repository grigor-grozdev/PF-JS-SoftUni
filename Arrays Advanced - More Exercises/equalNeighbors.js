function equalNeighbors(arr){

let all = [];

for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
        console.log(arr.includes(arr[i,j]));
    }
}

}

equalNeighbors([
['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);