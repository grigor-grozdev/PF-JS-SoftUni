function emojiDetector([str]) {

    let patternDigit = /\d/g;
    let pattern = /(\*{2}|:{2})(?<emoji>[A-Z][a-z]{2,})\1/g;

    let cool = 1;
    let matchDigit = str.match(patternDigit);

    cool = matchDigit.map(Number).reduce((acc, val) => acc * val);
    

    let matches = str.matchAll(pattern);

    let count = 0;
    let coolEmoji = [];

    for (let match of matches) {
        count++;
        let { emoji } = match.groups;
        let emojiValue = 0;
        let emojiArr = emoji.split('').forEach(ch => emojiValue += ch.charCodeAt());
        if (emojiValue > cool) {
            coolEmoji.push(match[0]);
        }
    }
    console.log(`Cool threshold: ${cool}`);
    if (count > 0) {
    console.log(`${count} emojis found in the text. The cool ones are:`);
    console.log(coolEmoji.join('\n'));
    }
}

emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])