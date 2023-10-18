function computerStore(arr) {

    let sum = 0;
    let i = 0;
    let taxes = 0;
    let finalPrice = 0;

    while (arr[i] != 'regular' && arr[i] != 'special') {

        let currentPrice = Number(arr[i]);

        if (currentPrice < 0) {
            console.log(`Invalid price!`);
            i++;
            continue;
        } else {
            sum += currentPrice;
        }
        i++;
    }

    if (sum == 0) {
        console.log(`Invalid order!`);
    } else {
        taxes = sum * 0.2;


        if (arr[arr.length - 1] == 'special') {
            finalPrice = (sum + taxes) * 0.9;
        } else {
            finalPrice = (sum + taxes);
        }

        console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${sum.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${finalPrice.toFixed(2)}$`);
    }

}

computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
computerStore(['regular'])