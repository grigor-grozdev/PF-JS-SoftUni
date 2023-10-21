function movingTarget(arr) {
    let targets = arr.shift().split(' ').map(Number);

    let commands = arr.shift();

    while (commands != 'End') {
        let token = commands.split(' ');

        let action = token.shift();

        if (action == 'Shoot') {
            let index = Number(token[0]);
            let power = Number(token[1]);
            if (index >= 0 && index < targets.length) {
                targets[index] -= power;
                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
            }
        } else if (action == 'Add') {
            let index = Number(token[0]);
            let value = Number(token[1]);
            if (index >= 0 && index < targets.length) {
                targets.splice(index, 0, value);
            } else {
                console.log(`Invalid placement!`);
                commands = arr.shift();
                continue;
            }
        } else if (action == 'Strike') {
            let index = Number(token[0]);
            let radius = Number(token[1]);
            let start = index - radius;
            let end = index + radius;
            if (start >= 0 && end < targets.length) {
                targets.splice(start, radius * 2 + 1);
            } else {
                console.log(`Strike missed!`);
                commands = arr.shift();
                continue;
            }
        }

        commands = arr.shift();
    }
    console.log(targets.join('|'));
}

movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"])