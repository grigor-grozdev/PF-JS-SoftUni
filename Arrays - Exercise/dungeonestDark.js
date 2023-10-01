function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;

    let roomsInfo = arr[0];
    let roomArr = roomsInfo.split('|');

    for (let i = 0; i < roomArr.length; i++) {
        let room = roomArr[i];
        let roomSpl = room.split(' ');

        let item = roomSpl[0];
        let num = Number(roomSpl[1]);
        let hp =0

        if (item == "potion") {
            health += num;
            if (health > 100) {
                hp = num - (health-100);
                health = 100;
            } else {
                hp = num;
            }

            console.log(`You healed for ${hp} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (item == "chest") {
            coins += num;
            console.log(`You found ${num} coins.`);
        } else {
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${item}.`);
            } else {
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }

        }

    }
    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }


}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);