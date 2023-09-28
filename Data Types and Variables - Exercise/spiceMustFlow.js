function spiceMustFlow(startingYield){

    let days = 0;
    let totalSpice = 0;
    let currentYield = 0;
    
    while (startingYield >= 100) {
    days ++;
    currentYield = startingYield - 26;
    totalSpice += currentYield;
    startingYield -= 10;
    }
    
    console.log(days);
    
    if(totalSpice >= 26) {
    console.log(totalSpice - 26);
    } else {
    console.log(totalSpice);
    }
    
    }