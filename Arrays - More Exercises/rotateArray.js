function rotateArray(arr){
let rotations = Number(arr.pop());

for (let i = 1; i <= rotations; i++){
    arr.unshift(arr.pop());
}
console.log(arr.join(' '));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);