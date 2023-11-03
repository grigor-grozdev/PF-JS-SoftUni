function meetings(arr) {
    let calendar = {}

    for (let item of arr) {
        let [day, name] = item.split(' ');
        if (day in calendar) {
            console.log(`Conflict on ${day}!`);
            continue;
        }

        calendar[day] = name;
        console.log(`Scheduled for ${day}`);
    }

    for (let [day, name] of Object.entries(calendar)) {
        console.log(`${day} -> ${name}`);
    }

}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])