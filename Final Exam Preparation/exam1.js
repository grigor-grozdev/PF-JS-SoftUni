function solve(arr) {

    let password = arr.shift();

    let command = arr.shift();

    while (command != 'Complete') {

        let tokens = command.split(' ');
        let action = tokens[0];

        if (action == 'Make') {
            let upLo = tokens[1];
            let index = Number(tokens[2]);


            if (upLo == 'Upper') {
                password = password.slice(0, index) + password[index].toUpperCase() + password.slice(index + 1);
            } else if (upLo == 'Lower') {
                password = password.slice(0, index) + password[index].toLowerCase() + password.slice(index + 1);
            }
            console.log(password);
        } else if (action == 'Insert') {
            let index = Number(tokens[1]);
            let ch = tokens[2];

            if (index >= 0 && index < password.length) {
                password = password.slice(0, index) + ch + password.slice(index);
            }
            console.log(password);
        } else if (action == 'Replace') {
            let ch = tokens[1];
            let value = Number(tokens[2]);

            if (password.includes(ch)) {
                newCh = String.fromCharCode(ch.charCodeAt() + value);
                password = password.split(ch).join(newCh);
            }
            console.log(password);
        } else if (action == 'Validation') {

            if (password.length < 8) {
                console.log("Password must be at least 8 characters long!");
            }

            let patternWord = /[^\w]/;

            if (patternWord.test(password)) {
                console.log("Password must consist only of letters, digits and _!");
            }

            let patternUp = /[A-Z]/;

            if (!patternUp.test(password)) {
                console.log("Password must consist at least one uppercase letter!");
            }

            let patternLo = /[a-z]/;

            if (!patternLo.test(password)) {
                console.log("Password must consist at least one lowercase letter!");
            }

            let patternD = /[\d]/;

            if (!patternD.test(password)) {
                console.log("Password must consist at least one digit!");
            }

        }

        command = arr.shift();
    }

}

solve(['123456789',

    'Insert 3 R',

    'Replace 5 15',

    'Validation',

    'Make Lower 3',

    'Complete'])