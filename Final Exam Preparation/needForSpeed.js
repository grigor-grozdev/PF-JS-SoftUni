function needForSpeed(arr) {

    let n = Number(arr.shift());

    let garage = {};

    for (let i = 0; i < n; i++) {
        let car = arr.shift().split('|');
        let [model, mileage, fuel] = car;
        mileage = Number(mileage);
        fuel = Number(fuel);
        let vehicle = { mileage, fuel }
        garage[model] = vehicle;
    }

    let command = arr.shift();

    while (command != 'Stop') {

        let tokens = command.split(' : ');
        let action = tokens[0];
        let car = tokens[1];
        let vehicle = garage[car]

        if (action == 'Drive') {

            let distance = Number(tokens[2]);
            let givenFuel = Number(tokens[3]);

            if (vehicle.fuel < givenFuel) {
                console.log('Not enough fuel to make that ride');
            } else {
                vehicle.fuel -= givenFuel;
                vehicle.mileage += distance;
                console.log(`${car} driven for ${distance} kilometers. ${givenFuel} liters of fuel consumed.`);

                if (vehicle.mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete garage[car];
                }
            }

        } else if (action == 'Refuel') {
            let refillFuel = Number(tokens[2]);
            if ((vehicle.fuel + refillFuel) > 75) {
                refillFuel = 75 - vehicle.fuel;
            }
            vehicle.fuel += refillFuel;
            console.log(`${car} refueled with ${refillFuel} liters`);
        } else if (action == 'Revert') {
            km = Number(tokens[2]);
            vehicle.mileage -= km;
            if (vehicle.mileage < 10000) {
                vehicle.mileage = 10000;
            } else {
                console.log(`${car} mileage decreased by ${km} kilometers`);
            }
        }

        command = arr.shift();
    }
    let entries = Object.entries(garage);
    for (let entry of entries) {
        console.log(`${entry[0]} -> Mileage: ${entry[1].mileage} kms, Fuel in the tank: ${entry[1].fuel} lt.`);
    }
}

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])