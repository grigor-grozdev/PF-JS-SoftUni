function reversestring(str){
let newStr = "";
for (let i = str.length -1; i>=0; i--){
let word = str[i];
newStr += word;
}
console.log(newStr)
}

reversestring('Hello')