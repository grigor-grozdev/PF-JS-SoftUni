function gladiatorExpenses(lostCount, helmetPrice, swordPrice, shieldPrice, armorPrice){

    let expenses = 0;
    
    let totalHelmetPrice = helmetPrice * Math.floor(lostCount/2);
    let totalSwordPrice = swordPrice * Math.floor(lostCount/3);
    let totalShieldPrice = shieldPrice * Math.floor(lostCount/6);
    let totalArmorPrice = armorPrice * Math.floor(lostCount/12);
    
    console.log(`Gladiator expenses: ${(totalHelmetPrice+totalSwordPrice+totalShieldPrice+totalArmorPrice).toFixed(2)} aureus`);
    
    
    }