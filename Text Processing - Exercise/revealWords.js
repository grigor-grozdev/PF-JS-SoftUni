function solve(str, input) {

    let strAsArr = str.split(', ');

    let result = input.split(' ');

    for (let word of strAsArr) {
        let search = '*'.repeat(word.length);
        let index = result.indexOf(search);
        result.splice(index, 1, word);
    }
    console.log(result.join(' '));

}

solve('great, learning',
'softuni is ***** place for ******** new programming languages')