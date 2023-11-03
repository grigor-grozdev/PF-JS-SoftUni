function oddOccurrences(str) {

    let words = {};

    let arr = str.split(' ');

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        let item = arr[i].toLowerCase();
        for (let j = 0; j < arr.length; j++) {
            if (item == arr[j].toLowerCase()) {
                count++;
            }
        }
        words[item] = count;
    }

    let entries = Object.entries(words);

    let result = '';

    for (let entry of entries) {
        if (entry[1] % 2 != 0) {
            result += entry[0] + ' ';
        }
    }
    console.log(result);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')