function solve(arr, index, action) {

    let leftSum = 0;
    let rightSum = 0;
    let value = arr[index];

    switch (action) {
        case 'cheap':
            for (let i = 0; i < index; i++) {
                if (arr[i] < value) {
                    leftSum += arr[i];
                }
            }
            for (let i = index + 1; i < arr.length; i++) {
                if (arr[i] < value) {
                    rightSum += arr[i];
                }
            }
            break;
        case 'expensive':
            for (let i = 0; i < index; i++) {
                if (arr[i] >= value) {
                    leftSum += arr[i];
                }
            }
            for (let i = index + 1; i < arr.length; i++) {
                if (arr[i] >= value) {
                    rightSum += arr[i];
                }
            }
            break
    }

    if (leftSum >= rightSum) {
        console.log(`Left - ${leftSum}`);
    } else {
        console.log(`Right - ${rightSum}`);
    }
}

solve([5, 10, 12, 5, 4, 20], 3, 'cheap')