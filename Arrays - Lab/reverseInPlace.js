function reverseInPlace (arr){

    let temp = '';

    for (let i = 0; i < arr.length/2; i++){
        let j = arr.length - i -1;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
console.log(arr.join(' '));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])