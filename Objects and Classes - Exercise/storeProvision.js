function store(stock, order) {

    let store = {};

    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        let count = Number(stock[i + 1]);
        store[product] = count;
    }

    for (let j = 0; j < order.length; j += 2) {
        let product = order[j];
        let count = Number(order[j + 1]);
        if (product in store) {
            store[product] += count;
        } else {
            store[product] = count;
        }
    }
    let entries = Object.entries(store);
    for (let entry of entries){
        console.log(entry.join(' -> '));
    }
}

store(['Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30']);