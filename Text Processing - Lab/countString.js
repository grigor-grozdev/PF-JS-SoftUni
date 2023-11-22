function countString(str, search) {

    let words = str.split(' ');
    let count = 0;
    for (let word of words) {
        if (word == search) {
            count++;
        }
    }
    console.log(count);

    // let matches = words.filter(word => word == search);
    // console.log(matches.length);
}

countString('This is a word and it also is a sentence', 'is')