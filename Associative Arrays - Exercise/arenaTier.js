function solve(arr) {

    let gladiators = {};

    for (let items of arr) {
        if (items == 'Ave Cesar') {
            break;
        } else {
            if (items.includes('vs')) {

                let [name1, name2] = items.split(' vs ');

                if (name1 in gladiators && name2 in gladiators) {

                    let techniques1 = Object.keys(gladiators[name1]);
                    let techniques2 = Object.keys(gladiators[name2]);

                    if ((techniques1.filter(value => techniques2.includes(value))).length > 0) {

                        let skill1 = Object.values(gladiators[name1]).reduce((a, b) => a + b);
                        let skill2 = Object.values(gladiators[name2]).reduce((a, b) => a + b);

                        if (skill1 > skill2) {
                            delete gladiators[name2];
                        } else if (skill2 > skill1) {
                            delete gladiators[name1];
                        }

                    } else {
                        continue;
                    }

                } else {
                    continue;
                }

            } else {
                let [name, technique, skill] = items.split(' -> ');
                skill = Number(skill);

                if (name in gladiators) {
                    if (technique in gladiators[name]) {
                        if (gladiators[name][technique] < skill) {
                            gladiators[name][technique] = skill;
                        }
                    } else {
                        gladiators[name][technique] = skill;
                    }
                } else {
                    gladiators[name] = { [technique]: skill };
                }

            }

        }

    }
    
    let entries = Object.entries(gladiators);

    for (let gladiator of entries) {
        let gladiatorName = gladiator[0];
        let gladiatorSkill = Object.values(gladiator[1]).reduce((a, b) => a + b);
        gladiator.splice(1, 0, gladiatorSkill);
    }

    let sortedEntries = entries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (let gladiator of sortedEntries) {
        let gladiatorName = gladiator[0];
        let gladiatorSkill = gladiator[1];
        let techniques = Object.entries(gladiator[2]);
        let sortedTechniques = techniques.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        console.log(`${gladiatorName}: ${gladiatorSkill} skill`);
        sortedTechniques.forEach((technique) => console.log(`- ${technique.join(' <!> ')}`));
    }
}

solve([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'])