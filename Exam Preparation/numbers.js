function numbers(str) {

    let arr = str.split(' ').map(Number).sort((a,b)=>b-a);
    let sum = arr.reduce((sum, a) => sum += a);
    let average = sum / arr.length;
    
    let sort = arr.filter(x => x > average);
    
    if (sort.length == 0){
    console.log(`No`);
    } else {
    console.log(sort.slice(0,5).join(' '));
    }
    
    }

    numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')