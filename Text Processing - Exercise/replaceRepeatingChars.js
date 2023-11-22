function replaceRepeatingChars(str) {

    let result = '';

    let previousCh = '';

    for (let ch of str) {

        if (!(ch == previousCh)) {
            result += ch;
            previousCh = ch;
        }
    }

    console.log(result);

}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');