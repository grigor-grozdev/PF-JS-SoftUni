function numberModification(num){

    let result = 0;
    
    let numAsStr = String(num);
    
    let sum = 0;
    
    for (let i = 0; i < numAsStr.length; i++){
    let digit = Number(numAsStr[i]);
    sum += digit;
    }
    
    if ((sum / numAsStr.length) > 5){
    console.log(num);
    } else {
    
    while ((sum / numAsStr.length) <= 5){
    sum += 9;
    numAsStr += '9';
    }
    console.log(Number(numAsStr));
    }
    
    }
    
    numberModification(101);