function race(arr) {
    let raceList = {};
    let racers = arr.shift().split(', ');
    racers.forEach(name => raceList[name] = 0);

    let patternLetters = /[A-Za-z]/g;
    let patternDigits = /[0-9]/g;

    let command = arr.shift();

    while (command != 'end of race') {

        let name = command.match(patternLetters).join('');

        let distance = command.match(patternDigits).map(Number).reduce((acc, num) => acc + num);

        if (name in raceList) {
            raceList[name] += distance;
        }
        command = arr.shift();
    }

    let names = Object.entries(raceList).sort((a,b) => b[1] - a[1]);

    console.log(`1st place: ${names[0][0]}`);
    console.log(`2nd place: ${names[1][0]}`);
    console.log(`3rd place: ${names[2][0]}`);

}

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race'])