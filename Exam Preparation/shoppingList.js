function shoppingList(input) {

    let list = input.shift().split('!');

    let command = input.shift();

    while (command != 'Go Shopping!') {
        let token = command.split(' ');

        let action = token.shift();

        if (action == 'Urgent') {
            if (!list.includes(token[0])) {
                list.unshift(token[0]);
            }
        } else if (action == 'Unnecessary') {
            let index = list.indexOf(token[0]);
            if (index >= 0) {
                list.splice(index, 1);
            }
        } else if (action == 'Correct') {
            let index = list.indexOf(token[0]);
            if (index >= 0) {
                list[index] = token[1];
            }
        } else if (action == 'Rearrange') {
            let index = list.indexOf(token[0]);
            if (index >= 0) {
                list.push(list.splice(index, 1));
            }
        }
        command = input.shift();
    }
console.log(list.join(', '));
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);