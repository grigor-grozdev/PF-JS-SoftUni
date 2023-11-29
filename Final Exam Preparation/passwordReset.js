function passwordReset(arr) {

    let password = arr.shift();

    let command = arr.shift();

    while (command != 'Done') {

        let tokens = command.split(' ');

        let action = tokens[0];

        if (action == 'TakeOdd') {
            let revisedPass = '';
            for (let i = 0; i < password.length; i++) {
                if (i % 2 != 0) {
                    revisedPass += password[i];
                }
            }
            password = revisedPass;
            console.log(password);

        } else if (action == 'Cut') {
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);

            password = password.slice(0, index) + password.slice(index + length);
            console.log(password);

        } else if (action == 'Substitute') {

            let substring = tokens[1];
            let substitute = tokens[2];

            if (password.includes(substring)) {
                password = password.split(substring).join(substitute);
                console.log(password);
            } else {
                console.log('Nothing to replace!');
            }
        }

        command = arr.shift();
    }
    console.log(`Your password is: ${password}`)
}

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
