function adAstra([str]){

    let totalkcal = 0;
    let items = [];

    let pattern = /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/g;

    let match = str.matchAll(pattern);

    for (let item of match) {

        let {name, date, kcal} = item.groups;
        kcal = Number(kcal);
        totalkcal += kcal;

        let product = {name, date, kcal};
        items.push(product);
    }
    let days = Math.floor(totalkcal / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    items.forEach(item => console.log(`Item: ${item.name}, Best before: ${item.date}, Nutrition: ${item.kcal}`));
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])