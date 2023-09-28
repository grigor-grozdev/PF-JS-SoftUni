function pyramid(base,increment){

    //let base = 12;
    //let increment = 1;
    
    let rows = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    
    for (let i = base; i >= 1; i-= 2){
    rows++;
    
    if(i<=2){
    gold = i **2 * increment;
    } else {
    
    if(rows % 5 == 0){
    stone += (i-2) ** 2 * increment;
    lapis += (i-1) * 4 * increment;
    } else {
    stone += (i-2) ** 2 * increment;
    marble += (i-1) * 4 * increment;
    }
    }
    
    
    }
    
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(rows * increment)}`);
    
    }

    pyramid(11,1)