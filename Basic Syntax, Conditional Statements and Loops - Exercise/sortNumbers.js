function sortNum(num1, num2, num3) {

    let max1 = 0;
    let max2 = 0;
    let max3 = 0;

    if (num1 >= num2) {
        if (num1 >= num3) {
            max1 = num1;
            if (num2 >= num3) {
                max2 = num2;
                max3 = num3;
            } else {
                max2 = num3;
                max3 = num2;
            }
        } else {
            max1 = num3;
            max2 = num1;
            max3 = num2;
            console.log(max1);
            console.log(max2);
            console.log(max3);
            return;
        }
    } else

    if (num2 >= num3) {
        max1 = num2;
        if (num1 >= num3) {
            max2 = num1;
            max3 = num3;
        } else {
            max2 = num3;
            max3 = num1;
        }
    } else {
        max1 = num3;
        max2 = num2;
        max3 = num1;
    }

    console.log(max1);
    console.log(max2);
    console.log(max3);
}

sortNum(0, 0, 3)