function arrayManipulations(commands) {

    let arr = commands.shift().split(' ').map(Number);

    for (let input of commands) {

        let arrCommand = input.split(' ');
        let command = arrCommand[0];
        let num = arrCommand[1];
        let num2 = arrCommand[2];

        switch (command) {
            case 'Add':
                arr.push(num);
                break;
            case 'Remove':
                let index = arr.indexOf(Number(num));
                arr.splice(index, 1);
                break;
            case 'RemoveAt':
                arr.splice(num, 1);
                break;
            case 'Insert':
                arr.splice(num2, 0, num);
                break;


        }

    }
    console.log(arr.join(' '));

}

arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'])