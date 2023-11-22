function starEnigma(arr) {

    arr.shift();
    decryptedMsgs = [];

    let patternStar = /[star]/gi;

    for (let command of arr) {
        let match = command.match(patternStar);
        let decrypted = '';
        if (match) {
            let count = match.length;
        for (let ch of command) {
            let code = ch.charCodeAt() - count;
            decrypted += String.fromCharCode(code);
        }
        } else {
            decrypted = command;
        }
        decryptedMsgs.push(decrypted);
    }

    let patternPlanet = /@(?<name>[A-Za-z]+)[^-@!:]*:(?<population>\d+)[^-@!:]*!(?<attack>A|D)![^-@!:]*->(?<count>\d+)/;
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let command of decryptedMsgs) {

        let match = command.match(patternPlanet);

        if (match) {

            let { name, attack } = match.groups;
            if (attack == 'A') {
                attackedPlanets.push(name);
            } else {
                destroyedPlanets.push(name);
            }
        }
    }

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    if (attackedPlanets.length > 0) {
        attackedPlanets.sort((a, b) => a.localeCompare(b));
        attackedPlanets.forEach(planet => console.log(`-> ${planet}`))
    }
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    if (destroyedPlanets.length > 0) {
        destroyedPlanets.sort((a, b) => a.localeCompare(b));
        destroyedPlanets.forEach(planet => console.log(`-> ${planet}`))
    }
}

starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'])