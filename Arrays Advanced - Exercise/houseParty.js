function houseParty(arr) {

    let finalList = [];

    for (let token of arr) {

        let command = token.split(' ');
        let name = command[0];
        if (command.length == 3) {
            if (finalList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                finalList.push(name);
            }
        } else {
            if (finalList.indexOf(name) < 0) {
                console.log(`${name} is not in the list!`);
            } else {
                finalList.splice(finalList.indexOf(name), 1);
            }
        }
    }
    console.log(finalList.join('\n'));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])