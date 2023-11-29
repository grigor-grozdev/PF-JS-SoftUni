function worldTour(arr) {

    let stops = arr.shift();

    let command = arr.shift();

    while (command != 'Travel') {
        let tokens = command.split(':');
        let action =tokens[0];
        
        if (action == 'Add Stop') {
            let index = Number(tokens[1]);
            let str = tokens[2];
            if (index >= 0 && index < stops.length) {
                stops = stops.slice(0, index) + str + stops.slice(index);
            }
            console.log(stops);
        } else if (action == 'Remove Stop') {
            let startIdx = Number(tokens[1]);
            let endIdx = Number(tokens[2]);
            if ((startIdx >= 0 && startIdx < stops.length) && (endIdx >= 0 && endIdx < stops.length)) {
                stops = stops.slice(0, startIdx) + stops.slice(endIdx+1);
            }
            console.log(stops);
        } else if (action == 'Switch') {
            let oldStr = tokens[1];
            let newStr = tokens[2];
            if (stops.includes(oldStr)) {
                stops = stops.split(oldStr).join(newStr);
            }
            console.log(stops)
        }

        command = arr.shift();
    }
console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])