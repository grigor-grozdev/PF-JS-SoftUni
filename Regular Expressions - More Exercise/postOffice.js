function postOffice(input) {

    let pattern = /(?<strCapitalLetters>[^|]+)\|(?<wordLength>[^|]+)\|(?<words>[^|]+)/;

    let matchInput = pattern.exec(input);

    let { strCapitalLetters, wordLength, words } = matchInput.groups;

    let patternCapitalLetters = /([\#\$\%\&])(?<capitalLetters>[A-Z]+)\1/;
    let capitalLettersArr = strCapitalLetters.match(patternCapitalLetters);
    let { capitalLetters } = capitalLettersArr.groups;

    let result = {};

    for (let letter of capitalLetters) {
        let code = letter.charCodeAt();

        let pattern = `${code}:(?<num>[0-9][0-9])`

        let patternLength = new RegExp(pattern);
        let match = wordLength.match(patternLength);

        let { num } = match.groups;
        num = Number(num);
        result[letter] = num;
    }

    let keys = Object.keys(result);

    for (let key of keys) {

        let patternWord = new RegExp('(?<!\\.)\\b[' + key + '][^\\s]{' + result[key] + '}\\b');


        let match = words.match(patternWord)

        console.log(match.join(''))

    }

}

postOffice('Urgent"Message.TO$#POAML#|readData79:05:79:0!2 reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig')