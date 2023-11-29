function destinationMapper(str) {
  
    let pattern = /(=|\/)(?<place>[A-Z][A-Za-z]{2,})\1/g;
    let destinations = [];
    let travelPoints = 0;
    
    let matches = str.matchAll(pattern);
    
    for (let match of matches) {
      if(match){
        let {place} = match.groups;
        destinations.push(place);
        travelPoints += place.length;
      }
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
  }

  destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")