function fancyBarcode(arr) {

    let n = Number(arr.shift());

    let pattern = /@#+([A-Z][A-Za-z\d]{4,}[A-Z])\@#+/;

    for (let i = 0; i < n; i++) {
        let match = arr[i].match(pattern)
        if (match) {
            let code = match[1];
            let productGr = code.match(/\d/g);
            if (productGr == null) {
                console.log('Product group: 00')
            } else {
                console.log(`Product group: ${productGr.join('')}`)
            }
        } else {
            console.log('Invalid barcode');
        }

    }

}

fancyBarcode(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
