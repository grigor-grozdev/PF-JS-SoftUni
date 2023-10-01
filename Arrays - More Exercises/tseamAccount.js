function tseamAccount(arr) {
    let account = arr.shift();
    let accountArr = account.split(' ');

    let i = 0
    let input = arr[i];

    while (arr[i] != 'Play!') {
        let commands = arr[i];
        let commandsArr = commands.split(' ');
        let action = commandsArr[0];
        let game = commandsArr[1];

        if (action == 'Install') {
            if (!accountArr.includes(game)) {
                accountArr.push(game);
            }
        } else if (action == 'Uninstall') {
            for (let j = 0; j < accountArr.length; j++) {
                if (accountArr[j] == game) {
                    accountArr.splice(j, 1);
                }
            }
        } else if (action == 'Update') {
            for (let k = 0; k < accountArr.length; k++) {
                if (accountArr[k] == game) {
                    accountArr.splice(k, 1);
                    accountArr.push(game);
                }
            }
        } else if (action == 'Expansion') {
            let gameArr = game.split('-');
            let gameExp = gameArr[0];
            let exp = gameArr[1];
            for (let l = 0; l < accountArr.length; l++) {
                if (accountArr[l] == gameExp) {
                    accountArr[l] += " " + gameExp + ":" + exp;
                }
            }

        }

        i++
    }

    console.log(accountArr.join(' '));

}

tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']);