function furniture(arr) {

    let products = [];
    let totalMoney = 0;

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

    let item = arr.shift();

    while (item != 'Purchase') {

        let match = item.match(pattern);

        if (match) {
            let { name, price, qty } = match.groups;

            products.push(name);
            totalMoney += Number(price) * Number(qty);
        }

        item = arr.shift();
    }

    console.log('Bought furniture:');
    if (products.length > 0) {
        console.log(products.join('\n'));
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])