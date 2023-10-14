function distinctArrays(arr){

    let result = [];

    for (let el of arr){
        if (!result.includes(el)){
            result.push(el);
        }
    }
console.log(result.join(' '));
}

distinctArrays([1,2,3,4,4,3,2])