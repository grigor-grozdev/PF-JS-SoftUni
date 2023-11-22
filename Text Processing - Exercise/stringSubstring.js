function solve(str, input) {

    let sentence = input.toLowerCase().split(' ');
    let word = str.toLowerCase();
    if (sentence.indexOf(word) >= 0) {
        console.log(str);
    } else {
        console.log(`${str} not found!`);
    }
}

solve('java', 'JavaScript is the best programming language')