function companyUsers(arr) {
    let list = {}

    for (let item of arr) {
        let [company, userID] = item.split(' -> ');
        if (company in list) {
            if (!list[company].includes(userID)) {
                list[company].push(userID);
            }
        } else {
            list[company] = [userID]
        }
    }

    let entries = Object.entries(list);

    let sortedEntries = entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, IDs] of sortedEntries) {
        console.log(company);
        for (let id of IDs) {
            console.log(`-- ${id}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])