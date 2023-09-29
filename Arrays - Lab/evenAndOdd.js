function evenAndOdd(arr){

    let sumEven = 0;
    let sumOdd = 0;

    for (let num of arr){
        if (num % 2 == 0){
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
console.log(sumEven - sumOdd);
}

evenAndOdd([2,4,6,8,10] )