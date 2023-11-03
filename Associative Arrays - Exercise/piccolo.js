function piccolo(arr) {

    let parking = [];

    for (let car of arr) {
        let [direction, number] = car.split(', ');
        if (direction == 'IN') {
            if (parking.indexOf(number) < 0) {
                parking.push(number);
            } else {
                continue;
            }
        } else if (direction == 'OUT') {
            if (parking.indexOf(number) >= 0) {
                parking.splice(parking.indexOf(number), 1);
            } else {
                continue;
            }
        }
    }
    let sortedParking = parking.sort((a, b) => a.localeCompare(b));

    if (sortedParking.length == 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        console.log(sortedParking.join('\n'));
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU',
'IN, CA2822UU'])