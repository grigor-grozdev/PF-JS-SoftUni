function login(input){

let user = input[0];

let pass = "";
for (let i = user.length -1; i>=0; i--){
    pass += user[i];
}
let gess = input[1];
let index = 2;
let count = 0;

while (gess != pass){
count ++;
if (count == 4){
    console.log(`User ${user} blocked!`);
    return;
}
console.log(`Incorrect password. Try again.`);
gess = input[index];
index++
}
console.log(`User ${user} logged in.`);
}


login(['sunny','rainy','cloudy','sunny','not sunny']);