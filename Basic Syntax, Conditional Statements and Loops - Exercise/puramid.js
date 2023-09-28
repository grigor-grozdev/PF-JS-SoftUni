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
    stone += (i-2) * (i-2) * increment;
    if (i>=3){
    marble += (i-1) * 4 * increment;
    }
    if(rows % 5 == 0){
    lapis += (i-1) * 4 * increment;
    marble -= (i-1) * 4 * increment;
    }
    if(i<3){
    gold = i * i * increment;
    if(i!=2){
    stone -= i * i * increment;
    }
    }
    
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(rows * increment)}`);
    
    }

    pyramid(12,1)