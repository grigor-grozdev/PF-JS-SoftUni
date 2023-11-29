function activationKeys(arr) {

    let key = arr.shift();

    let command = arr.shift();

    while (command != 'Generate') {
        let tokens = command.split('>>>');
        let action = tokens[0];

        if (action == 'Contains') {
            let sub = tokens[1];

            if (key.indexOf(sub) != -1) {
                console.log(`${key} contains ${sub}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (action == 'Flip') {
            let size = tokens[1];
            let startIdx = Number(tokens[2]);
            let endIdx = Number(tokens[3]);
            let sub = key.slice(startIdx, endIdx);

            if (size == 'Upper') {
            key = key.slice(0, startIdx) + sub.toUpperCase() + key.slice(endIdx);
            } else {
            key = key.slice(0, startIdx) + sub.toLowerCase() + key.slice(endIdx);
            }
            console.log(key);
        } else if (action == 'Slice') {
            let startIdx = Number(tokens[1]);
            let endIdx = Number(tokens[2]);

            key = key.slice(0, startIdx) + key.slice(endIdx);
            console.log(key);
        }

        command = arr.shift();
    }

    console.log(`Your activation key is: ${key}`)

}

activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])