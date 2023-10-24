function solve2(arr) {

    let commands = arr.shift().split('||');
    let fuel = Number(arr.shift());
    let ammunition = Number(arr.shift());

    let command = commands.shift();

    while (command != 'Titan') {
        let tokens = command.split(' ')
        let action = tokens[0];

        if (action == 'Travel') {
            distance = Number(tokens[1]);
            if (fuel >= distance) {
                fuel -= distance;
                console.log(`The spaceship travelled ${distance} light-years.`);
            } else {
                console.log(`Mission failed.`);
                return;
            }
        } else if (action == 'Enemy') {
            let armour = Number(tokens[1]);
            if (ammunition >= armour) {
                ammunition -= armour;
                console.log(`An enemy with ${armour} armour is defeated.`);
            } else if (ammunition < armour && fuel >= armour * 2) {
                fuel -= armour*2;
                console.log(`An enemy with ${armour} armour is outmaneuvered.`);
            } else {
                console.log(`Mission failed.`);
                return;
            }
        } else if (action == 'Repair') {
            let num = Number(tokens[1]);
            fuel += num;
            ammunition += num * 2;
            console.log(`Ammunitions added: ${num * 2}.`);    
            console.log(`Fuel added: ${num}.`);      
        }

        command = commands.shift();
    }
console.log(`You have reached Titan, all passengers are safe.`);
}

solve2(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', '60', '100'])