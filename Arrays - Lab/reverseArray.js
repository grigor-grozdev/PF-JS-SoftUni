function reverseArray(num, inputArr){

    let output = [];
    
    for (let i = num -1; i >= 0; i--){
    
    let currentNum = inputArr[i];
    output += currentNum+' ';
    
    }
    
    console.log(output);
    
    }