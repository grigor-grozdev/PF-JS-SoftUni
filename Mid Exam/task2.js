function numbers(arr) {
    let numbers = arr.shift().split(' ').map(Number);

    let command = arr.shift();

    while (command != 'Finish') {
        let tokens = command.split(' ');
        let action = tokens[0];

        if (action == 'Add') {
            let value = Number(tokens[1]);
            numbers.push(value);
        } else if (action == 'Remove') {
            let value = Number(tokens[1]);
            let index = numbers.indexOf(value);
            if (index >= 0 && index < numbers.length) {
                numbers.splice(index, 1);
            } else {
                command = arr.shift();
                continue;
            }
        } else if (action == 'Replace') {
            let value = Number(tokens[1]);
            let replacement = Number(tokens[2]);
            let index = numbers.indexOf(value);
            if (index >= 0 && index < numbers.length) {
                numbers[index] = replacement;
            } else {
                command = arr.shift();
                continue;
            }
        } else if (action == 'Collapse') {
            let value = Number(tokens[1]);
            for (let i = numbers.length - 1; i >=0; i--) {
                if (numbers[i] < value) {
                    numbers.splice(i, 1);
                }
            }
        }

        command = arr.shift();
    }
    console.log(numbers.join(' '));

}

numbers(["1 20 -1 10",

"Collapse 8",

"Finish"])