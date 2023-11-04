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
        } else {
            continue;
        }
    }
    console.log(guestsList.length);
    console.log(guestsList.sort((a,b) => a-b).join('\n'))
}

partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
    ])