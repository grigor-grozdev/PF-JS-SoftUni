function loadingBar(num) {
    let result = '';

    for (let i = 1; i <= num / 10; i++) {
        result += '%';
    }
    for (let j = 10; j > num / 10; j--) {
        result += '.';
    }
    if (num == 100) {
        console.log(`100% Complete!`);
    } else {
        console.log(`${num}% [${result}]`);
        console.log(`Still loading...`);
    }

}

loadingBar(70)