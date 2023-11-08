function partyTime(arr) {

    let guestsList = [];

    while (arr[0] != 'PARTY') {
        let guest = arr.shift();
        guestsList.push(guest);
    }
    arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let index = guestsList.indexOf(arr[i]);
        if (index >= 0) {
            guestsList.splice(index, 1);
        }
    }
    
    let result = [];
    for (let guest of guestsList){
        let char = guest[0];        
        if (char != '0' && char != '1' && char != '2' && char != '3' && char != '4' && char != '5' && char != '6' && char != '7' && char != '8' && char != '9') {
            result.push(guest);
        } else {
            result.unshift(guest)
        }
    }
    
    
    console.log(result.length);
    for (let guest of result) {
        console.log(guest)
    }
    
}


partyTime([
    'aaaaaaa',
    '11111111',
    'tSzE5t0p',
    '0IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
    ])