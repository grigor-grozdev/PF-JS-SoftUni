function carWash(arr){

    let clean = 0;
    
    for (let action of arr){
    
    switch (action){
    
    case 'soap':
    clean += 10;
    break;
    
    case 'water':
    clean *= 1.20;
    break;
    
    case 'vacuum cleaner':
    clean *= 1.25;
    break;
    
    case 'mud':
    clean *= 0.90;
    break
    }
    
    }
    
    console.log(`The car is ${clean.toFixed(2)}% clean.`);
    
    }
    
    carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);