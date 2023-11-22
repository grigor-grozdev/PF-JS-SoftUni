function solve(input) {

    let arr = input.split(' ');

    for (let word of arr) {

        if (word.startsWith('#') && word.length > 1) {
            let newWord = word.substring(1, word.length);
            let isValid = true;
            for (let ch of newWord) {
                if (!((ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) || (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122))) {
                    isValid = false;
                }
            }
            if (isValid) {
                console.log(newWord)
            }
        }

    }

}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign')