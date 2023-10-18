function ldyBugs(arr) {
    let fieldCount = arr.shift();
    let field = [];
    let ladybugs = arr.shift();
    let ladybugsOnField = ladybugs.split(' ');

    for (let index of ladybugsOnField) {
        if (index >= 0 && index < fieldCount) {
            field[index] = 1;
        }
    }

    for (let i = 0; i < fieldCount; i++) {
        if (field[i] != 1) {
            field[i] = 0;
        }
    }

   // console.log(field)

    for (let input of arr) {
        let flight = input.split(' ');
        let start = Number(flight[0]);
        let moves = Number(flight[2]);
        let direction = flight[1];
        if (start < 0 || start >= fieldCount) {
            continue;
        } else {
        field[start] = 0;
        }

        switch (direction) {
            case 'right':
                let endR = start + moves;
                for (let j = endR; j >= 0 && j < fieldCount; j += moves) {
                    if (j >= fieldCount || j < 0) {
                        break;
                    } else if (field[j] == 0) {
                        field[j] = 1;
                        break;
                    }
                }
                break;
            case 'left':
                let endL = start - moves;
                for (let j = endL; j >= 0 && j < fieldCount; j -= moves) {
                    //if (j >= fieldCount || j < 0) {
                    //    break;
                    //} else 
                    if (field[j] == 0) {
                        field[j] = 1;
                        break;
                    }
                }
                break;
        }
    }
    console.log(field.join(' '));

}

ldyBugs([ 3, '0 1', '0 right 1', '2 right 1', '1 right -2' ]);