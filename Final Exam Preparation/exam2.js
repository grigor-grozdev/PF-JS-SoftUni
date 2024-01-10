function solve(arr) {

    let n = Number(arr.shift());

    let pattern = /(.+)>([\d]{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<\1/;

    for (let i = 0; i < n; i++) {

        let match = arr[i].match(pattern);
        if (match) {
            console.log(`Password: ${match[2]}${match[3]}${match[4]}${match[5]}`);
        } else {
            console.log("Try another password!");
        }

    }

}

solve(["5",

    "aa>111|mqu|BAU|mqu<aa",

    "()>111!aaa!AAA!^&*<()",

    "o>088|abc|AAA|***<o",

    "asd>asd|asd|ASD|asd<asd",

    "*>088|zzzz|ZzZ|123<*"])