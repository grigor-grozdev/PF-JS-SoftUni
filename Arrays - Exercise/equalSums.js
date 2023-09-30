function equalSums(arr) {

    let isEqual = false;
    let num = 0;

    for (let i = 0; i < arr.length; i++) {

        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }

        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }


        if (leftSum == rightSum) {
            isEqual = true
            num = i;
        }

    }

    if (isEqual) {
        console.log(num);
    } else {
        console.log("no");
    }

}

equalSums([1, 2, 3, 3])