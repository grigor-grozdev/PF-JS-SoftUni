function addAndSubtract(a, b, c) {

    function add(a, b) {
        return a + b;
    }
    let sum = add(a,b);
        
    function subtrack(sum, c){
        return sum - c;
    }
    let result = subtrack(sum,c);
    console.log(result);
}

addAndSubtract(23, 6, 10);
addAndSubtract(1,17,30);
addAndSubtract(42,58,100);
