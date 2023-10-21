function counterStrike(arr) {

    let energy = Number(arr.shift());
    let count = 0;

    for (let num of arr) {
        if (num == 'End of battle') {
            break;
        } else {
            if (energy - Number(num) >= 0) {
                energy -= Number(num);
                count++;
                if (count % 3 == 0) {
                    energy += count;
                }
            } else {
                console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
                return;
            }

        }
    }
    console.log(`Won battles: ${count}. Energy left: ${energy}`);
}

counterStrike(["200","54","14","28","13","End of battle"])

