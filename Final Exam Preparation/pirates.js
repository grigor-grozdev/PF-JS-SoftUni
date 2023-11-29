function pirates(arr) {

    let cities = {};

    let items = arr.shift();

    while (items != 'Sail') {

        let [city, population, gold] = items.split('||');
        population = Number(population);
        gold = Number(gold);

        if (city in cities) {
            cities[city].population += population;
            cities[city].gold += gold;
        } else {
            cities[city] = { population, gold };
        }
        items = arr.shift();
    }

    let commands = arr.shift();

    while (commands != 'End') {
        let tokens = commands.split('=>');
        let action = tokens[0];
        let city = tokens[1];

        if (action == 'Plunder') {
            let people = Number(tokens[2]);
            let stealedGold = Number(tokens[3]);

            cities[city].population -= people;
            cities[city].gold -= stealedGold;

            console.log(`${city} plundered! ${stealedGold} gold stolen, ${people} citizens killed.`);

            if (cities[city].population <= 0 || cities[city].gold <= 0) {
                console.log(`${city} has been wiped off the map!`);
                delete cities[city];
            } 
        } else {
            let increasedGold = Number(tokens[2]);
            if (increasedGold < 0) {
                console.log('Gold added cannot be a negative number!');
                commands = arr.shift();
                continue;
            }

            cities[city].gold += increasedGold;
            console.log(`${increasedGold} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`)
            
        }


        commands = arr.shift();
    }

    let entries = Object.entries(cities);

    if (entries.length == 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!')
    } else {
    console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
    entries.forEach(town => console.log(`${town[0]} -> Population: ${town[1].population} citizens, Gold: ${town[1].gold} kg`))
    }
}

pirates(["Nassau||95000||1000",

"San Juan||930000||1250",

"Campeche||270000||690",

"Port Royal||320000||1000",

"Port Royal||100000||2000",

"Sail",

"Prosper=>Port Royal=>-200",

"Plunder=>Nassau=>94000=>750",

"Plunder=>Nassau=>1000=>150",

"Plunder=>Campeche=>150000=>690",

"End"])