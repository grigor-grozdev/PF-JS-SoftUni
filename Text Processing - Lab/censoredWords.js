function censoredWords(text, word) {

    let censor = '*'.repeat(word.length);

    console.log(text.split(word).join(censor));

}

censoredWords('A small sentence with some words', 'small');
censoredWords('hello world hello', 'hello');