function gladiatorInventory(arr) {

    let inventory = arr.shift().split(' ');

    for (let commands of arr) {

        let token = commands.split(' ');

        let command = token[0];

        if (command == 'Buy') {
            let equipment = token[1];
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }
        } else if (command == 'Trash') {
            let equipment = token[1];
            let index = inventory.indexOf(equipment);
            if (index >= 0) {
                inventory.splice(index, 1);
            }
        } else if (command == 'Repair') {
            let equipment = token[1];
            let index = inventory.indexOf(equipment);
            if (index >= 0) {
                inventory.splice(index, 1);
                inventory.push(equipment);
            }
        } else if (command == 'Upgrade') {
            let equipment = token[1];
            let equipArr = equipment.split('-');
            let upgradeEquip = equipArr[0];
            let upgr = equipArr[1];
            let index = inventory.indexOf(upgradeEquip);
            if (index >= 0) {
                inventory.splice(index + 1, 0, `${upgradeEquip}:${upgr}`);
            }

        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory(
    ['SWORD Shield Spear',
        'Trash Bow',
        'Repair Shield',
        'Upgrade Helmet-V']
);