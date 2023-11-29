function plantDiscovery(arr) {
    let n = Number(arr.shift());
    let plants = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = arr.shift().split('<->');
        if (plant in plants) {
            plants[plant].rarity = rarity;
        } else {
            plants[plant] = { rarity };
            plants[plant]["ratings"] = [];
        }
    }

    let command = arr.shift();

    while (command != 'Exhibition') {
        let tokens = command.split(': ');
        let action = tokens[0];

        if (action == 'Rate') {
            let [plant, rating] = tokens[1].split(' - ');
            rating = Number(rating);

            if (plant in plants) {
                plants[plant]['ratings'].push(rating);
            } else {
                console.log("error");
            }
        } else if (action == 'Update') {
            let [plant, newRarity] = tokens[1].split(' - ');

            if (plant in plants) {
                plants[plant]["rarity"] = newRarity;
            } else {
                console.log("error");
            }
        } else if (action == 'Reset') {
            let plant = tokens[1];

            if (plant in plants) {
                plants[plant]["ratings"] = [];
            } else {
                console.log("error");
            }

        }

        command = arr.shift();
    }

    let entries = Object.entries(plants)

    console.log('Plants for the exhibition:');

    for (let entry of entries) {
        let avgRating = 0;
        if (entry[1].ratings.length == 0) {
            avgRating = 0;
        } else {
            avgRating = (entry[1].ratings.reduce((acc, val) => acc += val)) / entry[1].ratings.length;
        }
        console.log(`- ${entry[0]}; Rarity: ${entry[1].rarity}; Rating: ${avgRating.toFixed(2)}`)
    }
}

plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])
