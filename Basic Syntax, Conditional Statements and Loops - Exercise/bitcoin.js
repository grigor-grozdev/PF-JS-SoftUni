function input(arr) {

    //let input = [100, 200, 300];

    let money = 0;
    let totalSum = 0;
    let bitcoins = 0;
    let days = 0;
    let dayBitcoin = 0;
    let first = false;

    for (let i = 0; i < arr.length; i++) {
        days++
        let gold = arr[i];
        if (days % 3 == 0) {
            gold = gold * 0.7;
            money = gold * 67.51;
        } else {
            money = gold * 67.51;
        }
        totalSum += money
        if (totalSum >= 11949.16) {
            if (!first) {
                dayBitcoin = days;
            }
            first = true;
            bitcoins += Math.floor(totalSum / 11949.16);
            totalSum -= Math.floor(totalSum / 11949.16) * 11949.16;
        }

    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (dayBitcoin != 0) {
        console.log(`Day of the first purchased bitcoin: ${dayBitcoin}`);
    }
    console.log(`Left money: ${totalSum.toFixed(2)} lv.`);

}

input([3124.15, 504.212, 2511.124])