function blackFlag(arr) {

    let days = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let expectedPlunder = Number(arr[2]);
    let actualPlunder = 0;

    for (let i = 1; i <= days; i++) {
        actualPlunder += dailyPlunder;
        if (i % 3 == 0) {
            actualPlunder += dailyPlunder * 0.5;
        }
        if (i % 5 == 0) {
            actualPlunder *= 0.7;
        }
    }

    if (actualPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${actualPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${(actualPlunder / expectedPlunder * 100).toFixed(2)}% of the plunder.`);
    }

}

blackFlag(["10", "20", "380"]);
