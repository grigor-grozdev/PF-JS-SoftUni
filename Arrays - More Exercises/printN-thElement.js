function printNthElement(arr){

    let step = Number(arr[arr.length-1]);

    let result = [];

    for (let i = 0; i < arr.length-1; i += step){
        result.push(arr[i]);
    }

    console.log(result.join(' '));

}

printNthElement(['5', '20', '31', '4', '20', '2'])