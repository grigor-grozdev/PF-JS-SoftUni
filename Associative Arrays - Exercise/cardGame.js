function cardGame(arr) {

    let game = {};
    let powerObj = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14 };
    let typeObj = { S: 4, H: 3, D: 2, C: 1 };

    for (let items of arr) {
        let [name, item] = items.split(': ');
        let cards = item.split(', ');
        if (name in game) {
            game[name].push(...cards);
        } else {
            game[name] = cards;
        }
    }

    let entries = Object.entries(game);
    for (let entry of entries) {
        let sum = 0;
        let unique = new Set(entry[1]);
        for (let card of unique) {
            let power = card.slice(0, card.length - 1);
            let type = card[card.length - 1];
            let value = powerObj[power] * typeObj[type];
            sum += value;
        }
        console.log(`${entry[0]}: ${sum}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])