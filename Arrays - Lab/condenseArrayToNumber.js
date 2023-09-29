function condenseArrayToNumber(arr){

    while(arr.length > 1){
    
    for (let i = 0; i<arr.length; i++){
    if (i == arr.length -1){
    arr.pop();
    break;
    } else {
    arr[i] = arr[i] + arr[i+1];
    }
    
    }
    
    }
    
    console.log(arr[0]);
    }

    condenseArrayToNumber([3,5,7,45])