function treasureHunt(arr) {

    let chest = arr.shift().split('|');

    let i = 0;

    while (arr[i] != 'Yohoho!') {

        let tokens = arr[i].split(' ');

        let action = tokens.shift();

        if (action == 'Loot') {
            for (let el of tokens) {
                if (!chest.includes(el)) {
                    chest.unshift(el);
                }
            }

        } else if (action == 'Drop') {
            let index = Number(tokens[0]);
            if (index >= 0 && index < chest.length) {
                chest.push(chest.splice(index, 1).join(''));
            }

        } else if (action == 'Steal') {
            let index = Number(tokens[0]);
            if (index >= 0 && index <= chest.length) {
                console.log(chest.splice(chest.length - index).join(', '));
            }
        }
        i++
    }
    let sum = 0;

    if (chest.length == 0) {
        console.log(`Failed treasure hunt.`);
    } else {
        for (let item of chest) {
            sum += item.length;
        }
        console.log(`Average treasure gain: ${(sum / chest.length).toFixed(2)} pirate credits.`);
    }

}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",

"Loot Wood Gold Coins",

"Loot Silver Pistol",

"Drop 3",

"Steal 3",

"Yohoho!"])