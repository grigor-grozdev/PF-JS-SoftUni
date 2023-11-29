function mirrorWords([str]) {

    let pattern = /([@#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let result = [];
    let count = 0;

    let match = pattern.exec(str);

    while (match) {
        count++;
        if (match[2] == match[3].split('').reverse().join('')) {
            result.push(`${match[2]} <=> ${match[3]}`);
        }

        match = pattern.exec(str);
    }

    if (count == 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${count} word pairs found!`);
    }

    if (result.length == 0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`);
        console.log(result.join(', '));
    }

}

mirrorWords([

    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])