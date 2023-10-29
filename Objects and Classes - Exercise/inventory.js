function inventory(arr) {

    let inventory = [];

    for (let command of arr) {

        let [heroName, level, items] = command.split(' / ');
        level = Number(level);
        let invObj = { Hero: heroName, level: level, items: items };
        inventory.push(invObj);
    }

    let sorted = inventory.sort((a, b) => a.level - b.level);

    for (let hero of sorted) {
        console.log(`Hero: ${hero.Hero}\nlevel => ${hero.level}\nitems => ${hero.items}`);
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])