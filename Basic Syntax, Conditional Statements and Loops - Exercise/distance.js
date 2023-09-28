function distance(x1,y1,x2,y2){
let a = (x1 - x2) * (x1 - x2);
let b = (y1 - y2) * (y1 - y2);

let dist = Math.sqrt(a+b);

console.log(dist);
}

distance(2.34, 15.66, -13.55, -2.9985)