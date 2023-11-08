function garage(arr) {

    let garage = {};

    for (let items of arr) {
        let tokens = items.split(' - ');
        let garageNo = tokens.shift();
        let cars = tokens.shift();

        if (garageNo in garage) {
            garage[garageNo].push(cars);
        } else {
            garage[garageNo] = [cars];
        }

    }

    let entries = Object.entries(garage);

    for (let entry of entries) {

        let num = entry.shift();
        console.log(`Garage № ${num}`);

        for (let items of entry) {
            for (let car of items) {
                let result = car.replaceAll(/: /g, ' - ');
                console.log(`--- ${result}`);
            }
        }
    }
}

garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi',
'2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])