function serializeString(arr) {

    let str = arr[0].split('');

    let result = {};

    for (let ch of str) {

        for (let i = 0; i < str.length; i++) {
            let index = String(i);
            if (ch == str[i]) {
                if (ch in result) {
                    if (!(result[ch].includes(index)))
                        result[ch] += '/'+index;
                } else {
                    result[ch] = index;
                }
            }
        }
    }
    let entries = Object.entries(result);

    for (let entry of entries) {

        console.log(`${entry[0]}:${entry[1]}`)
    }
}
serializeString(["avjavamsdmcalsdm"] )