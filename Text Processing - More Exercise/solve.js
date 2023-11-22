function serialStr(arr) {
    let str = arr.join(' ')

    let words = [];
 
    for (let el of str) {
        if (!words.includes(el)) {
            words.push(el)
        }
    }
    while (words.length > 0) {
        let char = words.shift();
        let numbers = [];
 
        for (let i = 0; i < str.length; i++) {
            if (char == str[i]) {
                numbers.push(i);
            }
        }
        console.log(`${char}:${numbers.join('/')}`);
    }
}

solve(["avjavamsdmcalsdm"])