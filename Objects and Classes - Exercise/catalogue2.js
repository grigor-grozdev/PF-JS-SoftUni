function catalogue2(arr) {
    let sortedArr = arr.sort((a, b) => a.localeCompare(b));
    
    let index = sortedArr[0][0];
    sortedArr.unshift(index);

    for (let i = 0; i < sortedArr.length; i++) {
        let currIndex = sortedArr[i][0];
        if (currIndex != index) {
            index = currIndex;
            sortedArr.splice(i, 0, currIndex);
            i++
        }
    }

    for (let item of sortedArr) {
        
        if (item.length == 1) {
            console.log(item)
        } else {
            let itemArr = item.split(' : ');
            console.log(`  ${itemArr[0]}: ${itemArr[1]}`)
        }
    }

}

catalogue2([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
])