function solve(str) {

    let pattern = /(?<char>[^0-9]+)(?<count>20|1?[0-9])/g;
    let match = pattern.exec(str);
    
    let result = '';
    
    while (match != null) {
    
    let {char, count} = match.groups;
    count = Number(count);
    result += char.toUpperCase().repeat(count);
    
    match = pattern.exec(str);
    }
    let arr = result.split('');
    let unique = new Set(arr);
    
    console.log(`Unique symbols used: ${unique.size}`);
    console.log(result)
    
    }

    solve('aSd2&5s@1')