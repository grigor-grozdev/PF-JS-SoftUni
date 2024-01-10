function solve(input) {

    let capacity = Number(input.shift());

    let messages = {};

    let commands = input.shift();

    while (commands != 'Statistics') {

        let tokens = commands.split('=');
        let action = tokens[0];

        if (action == 'Add') {
            let user = tokens[1];
            let sent = Number(tokens[2]);
            let received = Number(tokens[3]);

            if (user in messages) {
                commands = input.shift();
                continue;
            } else {
                messages[user] = {sent, received}; 
            } 
        } else if (action == 'Message') {
            let sender = tokens[1];
            let receiver = tokens[2];

            if (sender in messages && receiver in messages) {
                messages[sender]['sent'] += 1;
                messages[receiver]['received'] += 1;

                if (messages[sender]['sent'] + messages[sender]['received'] >= capacity) {
                    console.log(`${sender} reached the capacity!`);
                    delete messages[sender];
                }
                if (messages[receiver]['sent'] + messages[receiver]['received'] >= capacity) {
                    console.log(`${receiver} reached the capacity!`);
                    delete messages[receiver];
                }
            }
        } else if (action == 'Empty') {
            let user = tokens[1];

            if (user == 'All') {
                for (let key in messages) {
                    delete messages[key];
                }
            } else if (user in messages) {
                delete messages[user];
            }
        }


        commands = input.shift();
    }

let entries = Object.entries(messages);
if (entries.length == 0) {
    console.log(`Users count: ${entries.length}`);
} else {
    console.log(`Users count: ${entries.length}`);
    for (let entry of entries) {
        console.log(`${entry[0]} - ${entry[1].sent + entry[1].received}`)
    }
}
}

solve(["10",

"Add=Berg=9=0",

"Add=Kevin=0=0",

"Message=Berg=Kevin",

"Add=Mark=5=4",

"Statistics"])