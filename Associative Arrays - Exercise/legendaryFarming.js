function legendaryFarming(str){
   let keyMaterials = {shards: 0, motes: 0, fragments: 0};
   let junkMaterials = {};
   
   let legendary = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath'};

   let arr = str.split(' ');

   for (let i = 0; i < arr.length; i += 2){
    let qty = Number(arr[i]);
    let name = arr[i+1].toLowerCase();

    if (name == 'shards' || name == 'fragments' || name == 'motes') {
        if (name in keyMaterials){
            keyMaterials[name] += qty;            
        } else {
            keyMaterials[name] = qty;
        }
        if (keyMaterials[name] >= 250) {
            keyMaterials[name] -= 250;
            console.log(`${legendary[name]} obtained!`);
            break;
        }
    } else {
        if (name in junkMaterials){
            junkMaterials[name] += qty;
            } else {
            junkMaterials[name] = qty;
        }
    }    
   }

   let entries = Object.entries(keyMaterials).sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));

   for (let [material, qty] of entries) {
    console.log(`${material}: ${qty}`);
   }

   for (let junks of Object.entries(junkMaterials).sort((a,b) => a[0].localeCompare(b[0]))){
    console.log(junks.join(`: `));
   }
}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')