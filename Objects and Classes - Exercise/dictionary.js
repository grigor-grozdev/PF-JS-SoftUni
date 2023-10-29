function dictionary(arr) {

    let dictionary = {};

    for (let command of arr) {
        let termObj = JSON.parse(command);
        let term = Object.keys(termObj)[0];
        let definition = Object.values(termObj)[0];

        if (term in dictionary) {
            dictionary[term] = definition;
        } else {
            dictionary[term] = definition;
        }

    }

    let sortedDictionary = Object.keys(dictionary)
        .sort()
        .reduce((acc, key) => {
            acc[key] = dictionary[key];
            return acc;
        }, {});

    let entries = Object.entries(sortedDictionary);
    for (let entry of entries) {
        console.log(`Term: ${entry[0]} => Definition: ${entry[1]}`);
    }
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Bus":"A large motor vehicle carrying passengers."}',])