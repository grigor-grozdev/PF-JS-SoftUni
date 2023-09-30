function maxNumber(arr) {

    let result = "";

    for (let i = 1; i < arr.length; i++) {
        let num = arr[i];
        let isBigger = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (num <= arr[j]) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            result += num + " ";
        }
    }
    console.log(result);

}

maxNumber([14, 24, 3, 19, 15, 17])