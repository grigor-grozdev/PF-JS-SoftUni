function barIncome(arr) {

    let totalIncome = 0;

    let command = arr.shift();

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/;

    while (command != 'end of shift') {

        let match = command.match(pattern);

        if (match) {
            let { name, product, count, price } = match.groups;
            let sum = Number(count) * Number(price);
            totalIncome += sum;
            console.log(`${name}: ${product} - ${sum.toFixed(2)}`)
        }
        command = arr.shift();
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);

}

barIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift'])