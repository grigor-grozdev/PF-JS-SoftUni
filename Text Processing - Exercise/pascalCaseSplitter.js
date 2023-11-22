function pascalCaseSplitter(str) {

    let result = ''
    for (let ch of str) {

        if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
            result += ' ' + ch;
        } else {
            result += ch;
        }
    }

    result = result.trim().split(' ').join(', ');
    console.log(result);

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')