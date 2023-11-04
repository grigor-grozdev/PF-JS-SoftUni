function travelTime(arr) {
    let travel = {};

    for (let item of arr) {
        let [country, town, cost] = item.split(' > ');
        cost = Number(cost);

        if (country in travel) {
            if (town in travel[country]) {
                if (travel[country][town] > cost) {
                    travel[country][town] = cost;
                }
            } else {
                travel[country][town] = cost;
            }
        } else {
            travel[country]= {[town]: cost};
        }
    }
    
    let entriesContry = Object.entries(travel).sort((a,b) => a[0].localeCompare(b[0]));
    
    for (let [country, towns] of entriesContry) {
        let result = (`${country} ->`)
        let entryTown = Object.entries(towns).sort((a,b) => a[1] - b[1]);
        for (let [town, cost] of entryTown){
            result += (` ${town} -> ${cost}`);
        }
        console.log(result);
    }

}

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ])