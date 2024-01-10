function solve(arr) {

    let animals = {};

    let command = arr.shift();

    while (command != 'EndDay') {
        let tokens = command.split(': ');
        let action = tokens[0];

        if (action == 'Add') {
            let [name, foodQty, area] = tokens[1].split('-');
            foodQty = Number(foodQty);

            if (name in animals) {
                animals[name]['foodQty'] += foodQty;
            } else {
                animals[name] = { foodQty, area };
            }
        } else if (action == 'Feed') {
            let [name, feedingFood] = tokens[1].split('-');
            feedingFood = Number(feedingFood);

            if (name in animals) {
                animals[name]['foodQty'] -= feedingFood;

                if (animals[name]['foodQty'] <= 0) {
                    console.log(`${name} was successfully fed`);
                    delete animals[name];
                }
            }
        }
        command = arr.shift();
    }

    let entries = Object.entries(animals);
    let areas = [];

    console.log("Animals:");
    for (let animal of entries) {
        console.log(`${animal[0]} -> ${animal[1].foodQty}g`);
        areas.push(animal[1].area)
    }

    let areaSet = new Set(areas);

    console.log("Areas with hungry animals:");

    for (let ar of areaSet) {
        let count = 0;
        for (let area of areas) {
            if (area == ar) {
                count++;
            }
        }
        console.log(`${ar}: ${count}`);
    }

}

solve(["Add: Jamie-600-WaterfallArea",

    "Add: Maya-6570-WaterfallArea",

    "Add: Adam-4500-ByTheCreek",

    "Add: Bobbie-6570-WaterfallArea",

    "Feed: Jamie-2000",

    "Feed: Adam-2000",

    "Feed: Adam-2500",

    "EndDay"])