function solve(arr) {

    let string = arr.shift();

    let commands = arr.shift();

    while (commands != 'Complete') {

        let tokens = commands.split(' ');
        let action = tokens[0];

        switch (action) {
            case 'Make':
            let upper = tokens[1];
            let idx = Number(tokens[2]);

            if (upper == 'Upper') {
                let char = string[idx].toUpperCase();
                string = string.slice(0, idx) + char + string.slice(idx + 1);
            } else if (upper == 'Lower') {
                let char = string[idx].toLowerCase();
                string = string.slice(0, idx) + char + string.slice(idx + 1);
            }
            console.log(string);
            break;

            case 'Insert':
            let idx1 = Number(tokens[1]);
            let char = tokens[2];

            if (idx1 >= 0 && idx1 < string.length) {
                string = string.slice(0, idx1) + char + string.slice(idx1);
            }
            console.log(string);
            break;

            case 'Replace':
            let ch = tokens[1];
            let value = Number(tokens[2]);

            if (string.includes(ch)) {
                newChar = String.fromCharCode(ch.charCodeAt() + value);
                string = string.split(ch).join(newChar);
            }
            console.log(string);
            break;

            case 'Validation':

            if (string.length < 8) {
                console.log("String must be at least 8 characters long!");
            }

            let regexChar = /[^\w]/;
            if (regexChar.test(string)) {
                console.log("String must consist only of letters, digits and _!");
            }

            let regexUpper = /[A-Z]/;
            if (!regexUpper.test(string)) {
                console.log("String must consist at least one uppercase letter!");
            }

            let regexLower = /[a-z]/;
            if (!regexLower.test(string)) {
                console.log("String must consist at least one lowercase letter!");
            }

            let regexDigit = /[\d]/;
            if (!regexDigit.test(string)) {
                console.log("String must consist at least one digit!");
            }

        }

        commands = arr.shift();
    }

}

solve(['123456789',

    'Insert 3 R',

    'Replace 5 15',

    'Validation',

    'Make Lower 3',

    'Complete'])

