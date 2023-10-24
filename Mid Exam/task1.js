function schoolLibrary(arr) {

    let shelf = arr.shift().split('&');

    let commands = arr.shift();

    while (commands != 'Done') {

        let tokens = commands.split(' | ');

        let action = tokens[0];

        if (action == 'Add Book') {
            let book = tokens[1];
            if (!shelf.includes(book)) {
                shelf.unshift(book);
            }
        } else if (action == 'Take Book') {
            let book = tokens[1];
            let index = shelf.indexOf(book);
            if (index >= 0) {
                shelf.splice(index, 1);
            }
        } else if (action == 'Swap Books') {
            let book1 = tokens[1];
            let book2 = tokens[2];
            let index1 = shelf.indexOf(book1);
            let index2 = shelf.indexOf(book2);
            if (index1 >= 0 && index2 >= 0 && index1 != index2) {
                let temp = book1;
                shelf[index1] = book2;
                shelf[index2] = temp;
            }
        } else if (action == 'Insert Book') {
            let book = tokens[1];
            if (!shelf.includes(book)) {
                shelf.push(book);
            }
        } else if (action == 'Check Book') {
            let index = tokens[1];
            if (index >= 0 && index < shelf.length) {
                console.log(shelf[index]);
            }
        }

        commands = arr.shift();
    }

    console.log(shelf.join(', '));

}

schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",

    "Check Book | 2",

    "Swap Books | Don Quixote | Ulysses",

    "Done"])