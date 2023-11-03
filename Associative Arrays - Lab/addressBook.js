function addressbook(arr) {
    let addressbook = {};

    for (let item of arr) {
        let [name, address] = item.split(':');
        addressbook[name] = address;
    }
    let entries = Object.entries(addressbook);

    let sortedArr = entries.sort((a, b) => a[0].localeCompare(b[0]));


    let sortedAddressbook = {};

    for (let item of sortedArr) {
        let [name, address] = item;
        sortedAddressbook[name] = address;
        console.log(item.join(' -> '));
    }
}


addressbook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])