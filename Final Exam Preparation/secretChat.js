function secretChat(arr) {

    let str = arr.shift();

    let command = arr.shift();

    while (command != 'Reveal') {

        let tokens = command.split(':|:')

        let action = tokens.shift();

        if (action == 'ChangeAll') {
            if (str.indexOf(tokens[0]) >= 0) {
                let regex = new RegExp(`${tokens[0]}`, 'g');
                str = str.replace(regex, tokens[1])
                console.log(str);
            }
        } else if (action == 'Reverse') {
            let index = str.indexOf(tokens[0])
            if (index >= 0) {
                let left = str.slice(0, index);
                let right = str.slice(index + tokens[0].length);
                str = left + right + tokens[0].split('').reverse().join('');
                console.log(str);
            } else {
                console.log('error')
            }
        } else if (action == 'InsertSpace') {
            let index = Number(tokens[0]);
            str = str.slice(0, index) + ' ' + str.slice(index);
            console.log(str);
        }

        command = arr.shift()
    }
    console.log(`You have a new text message: ${str}`)
}

secretChat([

    'heVVodar!gniV',
    
    'ChangeAll:|:V:|:l',
    
    'Reverse:|:!gnil',
    
    'InsertSpace:|:5',
    
    'Reveal'
    
    ])