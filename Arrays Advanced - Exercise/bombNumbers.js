function bombNumbers(arr, bomb) {

    let bombNumber = bomb[0];
    let power = bomb[1];

    while (arr.includes(bombNumber)) {
        let bombIndex = arr.indexOf(bombNumber);
        let start = Math.max(0, bombIndex - power);
        
        arr.splice(start, power * 2 + 1, 0);
    }
    let sum = arr.reduce((acc, value) => acc + value);
    console.log(sum);

}

bombNumbers([1, 1, 2, 1, 1, 1,
    2, 1, 1, 1],
    [2, 1]

)