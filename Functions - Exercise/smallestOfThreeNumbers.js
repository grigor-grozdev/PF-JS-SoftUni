function smallestOfThreeNumbers(numA, numB, numC) {

    let smallestNumber = 0;
    
    if (numA <= numB && numA <=numC){
    smallestNumber = numA;
    } else if (numB <= numA && numB <=numC){
    smallestNumber = numB;
    } else if (numC <= numB && numC <=numA){
    smallestNumber = numC;
    }
    console.log(smallestNumber);
    }

    smallestOfThreeNumbers(6,3,8)