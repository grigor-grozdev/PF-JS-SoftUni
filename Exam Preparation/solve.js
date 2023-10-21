function treasureHunt(input) {
    let arr = input.shift().split('|');
    sum = 0;
 
 
    for ( let token of input) {
        let cur = token.split(' ');
        let action  = cur.shift();
 
  if ( action == 'Yohoho!') {
        break;
    } else if (action =='Loot') {
        for (let el of cur) {
            if ( !arr.includes(el)) {
                arr.unshift(el)
            }
        }
    } else if ( action =='Drop') {
        if (Number(cur[0]) >= 0 && Number(cur[0]) < arr.length) {
        let mid = arr.splice(Number(cur[0]), 1).join('');
         arr.push(mid);
        } 
    } else if ( action == 'Steal') {
        let count = Math.min(arr.length, cur[0])
        let mid = arr.splice((Number(arr.length) - count), count);
        console.log(mid.join(', '));

    }   

}
        length = arr.map( x => x.length)
 
        for (let num of length) {
            sum += num;
        }
        averageGain = (sum / Number(arr.length)).toFixed(2);
 
        if (averageGain > 0) {
        console.log(`Average treasure gain: ${averageGain} pirate credits.`);
        } else {
            console.log(`Failed treasure hunt.`);
 
        }
 
}

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
