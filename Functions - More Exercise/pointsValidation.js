function pointsValidation(arr){
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    
    function checkIfValid(x1, y1, x2, y2){
    let result = Math.sqrt((x1-x2)**2 + (y1-y2)**2);
    if (Number.isInteger(result)){
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
    }
    
    let isValidX = checkIfValid(x1, y1, 0, 0);
    let isValidY = checkIfValid(x2, y2, 0, 0);
    let isValidXY = checkIfValid(x1, y1, x2, y2);
    
    }
    
    pointsValidation([2, 1, 1, 1] );