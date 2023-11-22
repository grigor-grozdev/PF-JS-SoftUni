function winningTicket(str) {

    let arrr = str.split(',');
    let arr = []
    arrr.forEach(item => arr.push(item.trim()));
    
    let pattern = /^[^\@\#\$\^]*(?<code>[\@\#\$\^]{6,})[^\@\#\$\^]*\1[^\@\#\$\^]*$/;
    
    for (let ticket of arr) {
    
    if (ticket.length != 20) {
    console.log('invalid ticket');
    continue;
    } else {
    
    let match = ticket.match(pattern);
    
    if (match) {
    let {code} = match.groups;
    if (code.length == 10) {
    console.log(`ticket "${ticket}" - ${code.length}${code[0]} Jackpot!`);
    } else {
    console.log(`ticket "${ticket}" - ${code.length}${code[0]}`);
    }
    } else {
    console.log(`ticket "${ticket}" - no match`);
    }
    }
    }
    }

    winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb , th@@@@@@eemo@@@@@@ey')