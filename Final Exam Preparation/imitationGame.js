function imitationGame (arr) {

    let message = arr.shift();
    
    let command = arr.shift();
    
    while (command != 'Decode') {
    
        let tokens = command.split('|');
        let action = tokens[0];

    if (action == 'ChangeAll') {
        let sub = tokens[1];
        let replacement = tokens[2];
        message = message.split(sub).join(replacement);
        
    } else if (action == 'Insert') {
        let index = Number(tokens[1]);
        let value = tokens[2];
        message = message.slice(0, index) + value + message.slice(index);
    
    } else if (action == 'Move') {
        let n = Number(tokens[1])
        let sub = message.slice(0, n);
        message = message.slice(n) + sub;
    
    }
        command = arr.shift();
    }
    
    console.log(`The decrypted message is: ${message}`);
    
    }

imitationGame([
    'owyouh',    
    'Move|2',    
    'Move|3',
    'Insert|3|are', 
    'Insert|9|?', 
    'Decode' ])