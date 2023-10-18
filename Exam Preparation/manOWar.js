function manOWar(arr) {

    let pirateship = arr.shift().split('>').map(Number);
    let warship = arr.shift().split('>').map(Number);
    let maxHealth = Number(arr.shift());
    let lost = false;

    let i = 0;

    while (arr[i] != 'Retire') {

        let command = arr[i].split(' ');

        let token = command[0];

        if (token == 'Fire') {

            let index = Number(command[1]);
            let damage = Number(command[2]);

            if (index >= 0 && index < warship.length) {
                warship[index] -= damage;
            } else {
                i++;
                continue;
            }
            if (warship[index] <= 0) {
                console.log(`You won! The enemy ship has sunken.`);
                lost = true;
                break;
            }

        } else if (token == 'Defend') {

            let startIndex = Number(command[1]);
            let endIndex = Number(command[2]);
            let damage = Number(command[3]);

            if ((startIndex >= 0 && startIndex < pirateship.length) &&
                (endIndex >= 0 && endIndex < pirateship.length)) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateship[i] -= damage;
                    if (pirateship[i] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        lost = true;
                        break;
                    }
                }
            } else {
                i++;
                continue;
            }

        } else if (token == 'Repair') {

            let index = Number(command[1]);
            let health = Number(command[2]);

            if (index >= 0 && index < pirateship.length) {
                pirateship[index] += health;
                if (pirateship[index] > maxHealth) {
                    pirateship[index] = maxHealth;
                }
            } else {
                i++;
                continue;
            }

        } else if (token == 'Status') {
            let count = 0;
            for (let el of pirateship) {
                if (el < maxHealth * 0.2) {
                    count++;
                }
            }
            console.log(`${count} sections need repair.`);
        }

        i++;
    }

    let pirate = pirateship.reduce((sum, a) => sum + a);
    let war = warship.reduce((acc, a) => acc + a);

    if (!lost) {
        console.log(`Pirate ship status: ${pirate}`);
        console.log(`Warship status: ${war}`);
    }
}

manOWar(["2>3>4>5>2", "6>7>8>9>10>11", "20", "Status", "Fire 2 3", "Defend 0 4 11", "Repair 3 18", "Retire"])