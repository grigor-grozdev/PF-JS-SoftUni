function biggestNumber(firstNum, secondNum, thirdNum){

    let biggest = 0;
    
    if (firstNum >= secondNum && firstNum >= thirdNum){
    biggest = firstNum;
    } else if (secondNum >= firstNum && secondNum >= thirdNum){
    biggest = secondNum;
    } else if (thirdNum >= firstNum && thirdNum >= secondNum){
    biggest = thirdNum;
    }
    console.log(biggest);
    }