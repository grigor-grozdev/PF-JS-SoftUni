function wordsTracker(arr) {

    let words = {};

    let items = arr.shift().split(' ');

    for (let i = 0; i < items.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {

            if (items[i] == arr[j]) {
                count++;
            }
        }

        words[items[i]] = count;
    }

    let entries = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (let entry of entries) {
        console.log(entry.join(' - '));
    }

}


wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
])