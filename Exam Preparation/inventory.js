function inventory(arr) {
    let inventory = arr.shift().split(', ');

    for (let commands of arr) {

        let token = commands.split(' - ');

        let command = token.shift();

        if (command == 'Collect') {
            if (inventory.includes(token[0])) {
                continue;
            } else {
                inventory.push(token[0]);
            }
        } else if (command == 'Drop') {
            let index = inventory.indexOf(token[0]);
            if (index >= 0) {
                inventory.splice(index, 1);
            }
        } else if (command == 'Combine Items') {
            items = token[0].split(':');
            let index = inventory.indexOf(items[0])
            if (index >= 0) {
                inventory.splice(index + 1, 0, items[1]);
            }
        } else if (command == 'Renew') {
            let index = inventory.indexOf(token[0]);
            if (index >= 0) {
                let rnew = inventory.splice(index, 1);
                inventory.push(rnew);
            }
        } else if (command == 'Craft!') {
            break;
        }

    }

    console.log(inventory.join(', '));
}




inventory(['Iron, Sword',
'Drop - Bronze',
'Combine Items - Sword:Bow',
'Renew - Iron',
'Craft!'
])