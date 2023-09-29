function equalArrays(firstArr, secondArr){

    let sum = 0;
    
    let areEqual = true;
    
    for (let i = 0; i < firstArr.length; i++){
    
    let num1 = Number(firstArr[i]);
    let num2 = Number(secondArr[i]);
    
    if (num1 == num2){
    sum += num1;
    } else {
    areEqual = false;
    console.log(`Arrays are not identical. Found difference at ${i} index`);
    break;
    }
    
    }
    
    if (areEqual){
    console.log(`Arrays are identical. Sum: ${sum}`);
    }
    
    }

    equalArrays(['10','20','30'],
    ['10','20','30'])