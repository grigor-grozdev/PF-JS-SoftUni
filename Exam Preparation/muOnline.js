function muOnline(str) {

    let health = 100;
    let bitcoins = 0;
    let room = 1;
    let isDead = false;
    let arr = str.split('|');

    for (let command of arr) {

        let commandArr = command.split(' ');
        let token = commandArr[0];
        let num = Number(commandArr[1]);

        if (token == 'potion') {
            let heal = 0;
            if (health + num > 100) {
                heal = 100 - health;
            } else {
                heal = num;
            }
            health = health + heal;
            console.log(`You healed for ${heal} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (token == 'chest') {
            bitcoins += num;
            console.log(`You found ${num} bitcoins.`);

        } else {

            health -= num;

            if (health <= 0) {
                console.log(`You died! Killed by ${token}.`);
                console.log(`Best room: ${room}`);
                isDead = true;
                break;
            } else {
                console.log(`You slayed ${token}.`);
            }

        }

        room++;
    }

    if (!isDead) {
        console.log(`You\'ve made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }

}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");