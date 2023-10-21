function heartDelivery(input) {

    let houses = input.shift().split('@').map(Number);

    let indexJump = 0;

    let command = input.shift();

    while (command != 'Love!') {

        token = command.split(' ');

        let jump = Number(token[1]);

        let currIndex = indexJump + jump;

        if (currIndex >= houses.length) {
            indexJump = 0;
            if (houses[indexJump] == 0) {
                console.log(`Place ${indexJump} already had Valentine's day.`);
                command = input.shift();
                continue;
            } else {
                houses[indexJump] -= 2;
                if (houses[indexJump] <= 0) {
                    houses[indexJump] = 0;
                    console.log(`Place ${indexJump} has Valentine's day.`)
                }
            }
        } else {

            if (houses[currIndex] == 0) {
                console.log(`Place ${currIndex} already had Valentine's day.`);
                command = input.shift();
                continue;
            } else {
                houses[currIndex] -= 2;
                if (houses[currIndex] <= 0) {
                    houses[currIndex] = 0;
                    console.log(`Place ${currIndex} has Valentine's day.`)
                }
            }

            indexJump = currIndex;
        }

        command = input.shift();
    }

    console.log(`Cupid's last position was ${indexJump}.`);

    let count = 0;

    for (let item of houses) {
        if (item > 0) {
            count ++;
        }
    }

    if (count > 0) {
        console.log(`Cupid has failed ${count} places.`);
    } else {
        console.log(`Mission was successful.`);
    }
}

heartDelivery(["10",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])