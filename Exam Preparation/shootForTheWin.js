function shootForTheWin(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let count = 0;
    let shot = arr.shift();
    while (shot != 'End') {
        shot = Number(shot);
        if (shot >= 0 && shot < targets.length) {
            let currTarget = targets[shot];
            targets[shot] = -1;
            count++;
            for (let i = 0; i < targets.length; i++) {
                if (targets[i] > currTarget) {
                    targets[i] -= currTarget;
                } else if (targets[i] > 0 && targets[i] <= currTarget) {
                    targets[i] += currTarget;
                }
            }
        } else {
            shot = arr.shift();
            continue;
        }

        shot = arr.shift();
    }

    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
}

shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"])

