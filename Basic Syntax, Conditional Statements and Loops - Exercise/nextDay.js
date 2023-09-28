function nextDay(year,month,day){
    let daySet = new Date(year, month-1, day);
    
    let dayNext = new Date(daySet);
    dayNext.setDate(daySet.getDate()+1);
    
    
    let nextY = dayNext.getFullYear();
    let nextM = dayNext.getMonth()+1;
    let nextD = dayNext.getDate();
    console.log(`${nextY}-${nextM}-${nextD}`);
    }

    nextDay(2023,09,25)