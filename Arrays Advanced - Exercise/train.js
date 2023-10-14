function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift());

    for (let command of arr) {

        let token = command.split(' ');

        if (token[0] == 'Add') {
            wagons.push(Number(token[1]));
        } else {
            let passangers = Number(token[0]);

            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passangers <= capacity) {
                    wagons[i] += passangers;
                    break;
                }
            }

        }

    }


    console.log(wagons.join(' '))   

}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])