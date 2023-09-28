function sumDigit(num){

    let sum = 0;
    let number = num.toString();
    
    for (let i = 0; i < number.length; i++){
    sum+= Number(number[i]);
    }
    
    console.log(sum);
    
    }