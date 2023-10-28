function ldyBugs(arr) {
    let fieldCount = arr.shift();
    let field = [];
    let ladybugs = arr.shift();
    let ladybugsOnField = ladybugs.split(' ').map(Number);

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
        
        if (!field[start]) {
            continue;
        }

        field[start] = 0;
        

        switch (direction) {
            case 'right':
                let endR = start + moves;
                
                if (endR < field.length) {
                    while (field[endR] == 1) {
                        endR += moves;
                    }
                    if (endR < field.length) {
                        field[endR] = 1;
                    }
                }
                break;
            case 'left':
                let endL = start - moves;
                
                if (endL >= 0) {
                    while (field[endL] == 1) {
                        endL -= moves;
                    }
                    if (endL >= 0) {
                        field[endL] = 1;
                    }
                }
                
                break;
        }
    }
    console.log(field.join(' '));

}

ldyBugs([ 3, '0 1', '2 right 2', '0 right 1', '2 right 1' ])
