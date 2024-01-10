function solve(input) {

    let n = Number(input.shift());

    let pattern = /^([$%])(?<tag>[A-Z][a-z]{2,})\1: (\[(?<num1>\d+)\]\|\[(?<num2>\d+)\]\|\[(?<num3>\d+)\]\|)$/;

    for (let i = 0; i < n; i++) {

        let match = input[i].match(pattern);
        if (match) {
            let {tag, num1, num2, num3} = match.groups;
            num1 = Number(num1);
            num2 = Number(num2);
            num3 = Number(num3);
            console.log(`${tag}: ${String.fromCharCode(num1)}${String.fromCharCode(num2)}${String.fromCharCode(num3)}`);
        } else {
            console.log("Valid message not found!");
        }

    }

}

solve(["4", 
"$Request$: [73]|[115]|[105]|", 
"%Taggy$: [73]|[73]|[73]|", 
"%Taggy%: [118]|[97]|[108]|", 
"$Request$: [73]|[115]|[105]|[32]|[75]|"])