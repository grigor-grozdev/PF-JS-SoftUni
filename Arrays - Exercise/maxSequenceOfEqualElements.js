function maxSequence(arr) {

    let result = '';

    for (let i = 0; i < arr.length; i++) {

        let tempResult = arr[i] + ' ';

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] != arr[j]) {
                break;
            } else {
                tempResult += arr[j] + ' ';
            }
        }

        if (tempResult.length > result.length) {
            result = tempResult;
        }

    }

    console.log(result);

}

maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3] )