function memoryGame(input) {

    let arr = input.shift().split(' ');
    let i = 0;

    while (input[i] != 'end') {

        let token = input[i];
        let command = token.split(' ').map(Number);

        let idx1 = command[0];
        let idx2 = command[1];

        if (idx1 >= 0 && idx1 < arr.length && idx2 >= 0 && idx2 < arr.length && idx1 != idx2) {

            if (arr[idx1] == arr[idx2]) {
                console.log(`Congrats! You have found matching elements - ${arr[idx1]}!`);
                if (idx2 > idx1) {
                    arr.splice(idx2, 1);
                    arr.splice(idx1, 1);
                } else {
                    arr.splice(idx1, 1);
                    arr.splice(idx2, 1);
                }
            } else {
                console.log(`Try again!`);
                i++;
                continue;
            }
        } else {
            console.log(`Invalid input! Adding additional elements to the board`);
            arr.splice(Math.floor(arr.length / 2), 0, `-${i + 1}a`, `-${i + 1}a`);

        }
        if (arr.length == 0) {
            console.log(`You have won in ${i + 1} turns!`);
            return;
        }
        i++
    }
    if (arr.length > 0) {
        console.log(`Sorry you lose :(\n${arr.join(' ')}`);
    }
}

memoryGame(["a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"])