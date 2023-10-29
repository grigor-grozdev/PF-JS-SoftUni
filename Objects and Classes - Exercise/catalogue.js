function catalogue(arr) {
    let sortedArr = arr.sort((a, b) => a.localeCompare(b));
   

    let catalogue = {};

    for (let item of sortedArr) {
        let [product, count] = item.split(' : ');
        catalogue[product] = Number(count);
    }

    let entries = Object.entries(catalogue);

    let index = entries[0][0][0];
    entries.unshift(index);

    for (let i = 0; i < entries.length; i++) {
        let currIndex = entries[i][0][0];
        if (currIndex != index) {
            index = currIndex;
            entries.splice(i, 0, currIndex);
            i++
        }
    }

    for (let item of entries) {
        let type = typeof item;
        if (type == 'string') {
            console.log(item)
        } else {
            console.log(`  ${item[0]}: ${item[1]}`)
        }
    }

}

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
])