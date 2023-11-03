function phoneBook(arr) {

    let phonebook = {};

    for (let item of arr) {
        let [name, phoneNum] = item.split(' ')
        phonebook[name] = phoneNum;
    }

    for (let entry of Object.entries(phonebook)) {
        console.log(entry.join(' -> '));
    }

}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])