function towns(arr) {

for (let town of arr) {

    let [name, latitude, longitude] = town.split(' | ');
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);
    let townObj = {
        town: name,
        latitude: latitude,
        longitude: longitude
    }

    console.log(townObj);
}

}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);