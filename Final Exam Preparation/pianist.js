function pianist(arr) {

  let n = Number(arr.shift());

  let list = {};

  for (let i = 0; i < n; i++) {

    let [piece, composer, key] = arr.shift().split('|');

    list[piece] = { composer, key };
  }

  let command = arr.shift();

  while (command != 'Stop') {
    let tokens = command.split('|');
    let action = tokens[0];
    let piece = tokens[1];

    if (action == 'Add') {
      let composer = tokens[2];
      let key = tokens[3];

      if (piece in list) {
        console.log(`${piece} is already in the collection!`);
      } else {
        list[piece] = {composer, key};
        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
      }
    } else if (action == 'Remove') {
      if (piece in list) {
        console.log(`Successfully removed ${piece}!`);
        delete list[piece];
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
      }
    } else if (action == 'ChangeKey') {
      let newKey = tokens[2];
      if (piece in list) {
        list[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
      }

    }


    command = arr.shift();
  }
  let entries = Object.entries(list);

  for (let entry of entries) {
    console.log(`${entry[0]} -> Composer: ${entry[1].composer}, Key: ${entry[1].key}`);
  }
}

pianist([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'
])