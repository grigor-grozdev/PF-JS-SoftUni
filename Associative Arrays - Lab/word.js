function word(arr) {

    let map = new Map();

    for (let item of arr) {

        let count = 1;

        if (!map.has(item)) {
            map.set(item, count);
        } else {
            let currCount = map.get(item);
            let newCount = currCount += count;
            map.set(item, newCount);
        }

    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }

}

word(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"])