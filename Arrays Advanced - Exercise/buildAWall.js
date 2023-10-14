function buildAWall(arr) {

    let concrete = [];
    let sum = 0;
    let startHeight = arr.reduce((sum, el) => sum + el);

    while (startHeight < 30 * arr.length) {
        let cement = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 30) {
                arr[i]++;
                cement++;
            }
        }
        concrete.push(cement * 195);
        sum += cement * 195 * 1900;
        startHeight = arr.reduce((sum, el) => sum + el);
    }
    console.log(concrete.join(', '));
    console.log(`${sum} pesos`);

}

buildAWall([17, 22, 17, 19, 17])