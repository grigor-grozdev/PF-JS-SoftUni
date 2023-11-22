function netherRealms(input) {
    str = String(input);
    let arr = str.split(',');
    let sortArr = [];
    arr.forEach((item) => sortArr.push(item.trim()));
    sortArr.sort((a,b) => a.localeCompare(b));

    patternHealth = /[^0-9\-\*\+\/\.]/g;

    patternDamage = /[+-]?\d+\.?\d*/g;

    patternAction = /[\*\/]/g;

    for (let command of sortArr) {

        if (command.includes(' ')) {
            continue;
        }
        
        let health = 0;
        let matchHealth = command.match(patternHealth);
	if (matchHealth) {
	matchHealth.forEach(ch => health += ch.charCodeAt());
	}

        let damage = 0;
        let matchDamage = command.match(patternDamage);

        if (matchDamage != null) {
            damage = matchDamage.map(Number).reduce((acc, val) => acc + val);
            let matchAction = command.match(patternAction);
	    if (matchAction) {
            for (let act of matchAction) {
                if (act == '*') {
                    damage *= 2;
                } else if (act == '/') {
                    damage /= 2;
                }
            }
	    }	
        }
        console.log(`${command} - ${health} health, ${damage.toFixed(2)} damage`);
    }
}

netherRealms('t0**,   Azazel')