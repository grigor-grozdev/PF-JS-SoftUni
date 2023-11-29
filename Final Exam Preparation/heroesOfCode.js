function heroes(arr){

let n = arr.shift();
let parties = {};

for (let i = 0; i < n; i++) {
let [name, hp, mp] = arr.shift().split(' ');
hp = Number(hp);
mp = Number(mp);
let hero = {hp, mp};
parties[name] = hero;
}

let command = arr.shift();

while (command != 'End') {

let tokens = command.split(' - ');
let action = tokens[0];
let name = tokens[1];
let hero = parties[name];

if (action == 'CastSpell') {

let mpNeeded = Number(tokens[2]);
let spell = tokens[3];

    if (hero.mp >= mpNeeded){
        hero.mp -= mpNeeded;
        console.log(`${name} has successfully cast ${spell} and now has ${hero.mp} MP!`)
    } else {
        console.log(`${name} does not have enough MP to cast ${spell}!`)
    }

} else if (action == 'TakeDamage') {

    let damage = Number(tokens[2]);
    let attacker = tokens[3];

    hero.hp -= damage;

    if (hero.hp > 0) {
        console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`)
    } else {
        console.log(`${name} has been killed by ${attacker}!`);
        delete parties[name];
    }
} else if (action == 'Recharge') {

    let amount = Number(tokens[2]);
    if ((amount + hero.mp) > 200) {
        amount = 200 - hero.mp;
    }
    hero.mp += amount;
    console.log(`${name} recharged for ${amount} MP!`);
} else if (action == 'Heal') {

    let amount = Number(tokens[2]);
    if ((amount + hero.hp) > 100) {
        amount = 100 - hero.hp;
    }
    hero.hp += amount;
    console.log(`${name} healed for ${amount} HP!`); 
}
command = arr.shift();
}
let entries = Object.entries(parties) ;
for (let entry of entries){
    console.log(entry[0]);
    console.log(`  HP: ${entry[1].hp}`);
    console.log(`  MP: ${entry[1].mp}`);
}

}

heroes([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])