function primeNumber(num){

    let notPrime = false;
    
    for (let i = 2; i < num; i++) {
     if (num % i == 0){
    notPrime = true;
    }
    }
    
    if (notPrime){
    console.log('false');
    }else{
    console.log('true');
    }
    
    }